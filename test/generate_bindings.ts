const {ArgumentParser} = require('argparse')
const libclang = require('../libclang')
const path = require('path')
const fs = require('fs-extra')

const skytechSdkFolder = process.env['SKYTECH_SDK']
if (!skytechSdkFolder) {
    throw Error('SKYTECH_SDK environment variable doesn`t exists')
}

const parser = new ArgumentParser()
parser.addArgument(['--output'])
const args = parser.parseKnownArgs()[0]

enum TypeKind {
    base,
    ref,
    enum,
    struct,
    fn,
    typedef,
}

enum TypescriptType {
    asis,
    number,
    boolean,
}

interface BaseTypes {
    name?: string
    tsType: TypescriptType
    refType?: string
    refTypeTs?: string
}

let baseTypes: { [key: string]: BaseTypes } = {
    void: {
        tsType: TypescriptType.asis,
    },
    char: {
        tsType: TypescriptType.asis,
    },
    uchar: {
        tsType: TypescriptType.number,
    },
    bool: {
        tsType: TypescriptType.boolean,
    },
    ulong: {
        tsType: TypescriptType.number,
    },
    ulonglong: {
        tsType: TypescriptType.number,
    },
    long: {
        tsType: TypescriptType.number,
    },
    longlong: {
        tsType: TypescriptType.number,
    },
    uint: {
        tsType: TypescriptType.number,
    },
    int: {
        tsType: TypescriptType.number,
    },
    short: {
        tsType: TypescriptType.number,
    },
    float: {
        tsType: TypescriptType.number,
    },
    double: {
        tsType: TypescriptType.number,
    },
}

for (let [name, type] of Object.entries(baseTypes)) {
    type.name = name
    type.refType = 'ref.types.' + name
    if (name === 'void') {
        type.refTypeTs = 'ref.types.rvoid'
    } else {
        type.refTypeTs = type.refType
    }
}

class Type {
    kind: TypeKind
    name?: string
}

class BaseType extends Type {
    kind = TypeKind.base

    constructor(public base: BaseTypes) {
        super()
    }
}

class RefType extends Type {
    kind = TypeKind.ref

    constructor(public ref: Type) {
        super()
    }
}

interface EnumField {
    name: string
    value: Type
}

class EnumType extends Type {
    kind = TypeKind.enum

    constructor(public fields: EnumField[] = []) {
        super()
    }
}


interface StructField {
    name: string
    type: Type
}

class StructType extends Type {
    kind = TypeKind.struct

    constructor(public fields: StructField[] = []) {
        super()
    }
}

class TypedefType extends Type {
    kind = TypeKind.typedef

    constructor(public type: Type = null) {
        super()
    }
}

class ArrayType extends Type {
    kind = TypeKind.typedef

    constructor(public type: Type, public length: number) {
        super()
    }
}

interface FunctionArgument {
    name: string
    type: Type
}

class FnType extends Type {
    kind = TypeKind.fn

    constructor(public returnType: Type = null,
                public args: FunctionArgument[] = [], public exported: boolean = false) {
        super()
    }
}

let namedTypes: { [name: string]: Type } = {}
let fns: FnType[] = []
let structs: { [name: string]: StructType } = {}
let enums: { [name: string]: EnumType } = {}
let typedefs: { [name: string]: TypedefType } = {}
let resultJs = ''
let resultTs = ''

let index = new libclang.Index(0, 1)

function getChildrens(node) {
    let childs = []
    node.visitChildren(function () {
        childs.push(this)
        return 1
    })
    return childs
}

let typeKindMap: { [key: number]: BaseTypes } = {}
typeKindMap[libclang.Type.ULong] = baseTypes.ulong
typeKindMap[libclang.Type.ULongLong] = baseTypes.ulonglong
typeKindMap[libclang.Type.Long] = baseTypes.long
typeKindMap[libclang.Type.LongLong] = baseTypes.longlong
typeKindMap[libclang.Type.Bool] = baseTypes.bool
typeKindMap[libclang.Type.Void] = baseTypes.void
typeKindMap[libclang.Type.UInt] = baseTypes.uint
typeKindMap[libclang.Type.Int] = baseTypes.int
typeKindMap[libclang.Type.Short] = baseTypes.short
typeKindMap[libclang.Type.UShort] = baseTypes.short
typeKindMap[libclang.Type.Float] = baseTypes.float
typeKindMap[libclang.Type.Double] = baseTypes.double
typeKindMap[libclang.Type.Char_S] = baseTypes.char
typeKindMap[libclang.Type.SChar] = baseTypes.char
typeKindMap[libclang.Type.UChar] = baseTypes.uchar

function getType(t, parentCursor = null): Type {
    switch (t.kind) {
        case libclang.Type.Pointer:
            if (t.pointeeType.kind === libclang.Type.Unexposed || t.pointeeType.kind === libclang.Type.FunctionProto) {
                const type = getType(t.pointeeType, parentCursor)
                if (type instanceof FnType) {
                    return type
                }
                throw Error(`Type must be function ${t.kind}: ${t.spelling}`)
            }
            // if (t.pointeeType.kind == libclang.Type.Char_S) {
            //   return `ref.types.CString`
            // }
            return new RefType(getType(t.pointeeType))
        case libclang.Type.ConstantArray:
            return new ArrayType(getType(t.elementType), t.numElements)
        case libclang.Type.Typedef:
        case libclang.Type.Elaborated:
        case libclang.Type.Record:
            let type = parseChild(t.declaration)
            if (!type) {
                throw Error('Unknown type')
            }
            return type
        case libclang.Type.FunctionProto:
        case libclang.Type.Unexposed:
            let fn = new FnType()
            fn.exported = false
            fn.returnType = getType(t.result)
            for (let i = 0; i < t.argTypes; ++i) {
                fn.args.push({
                    name: `arg${i}`,
                    type: getType(t.getArg(i)),
                })
            }
            if (parentCursor) {
                let ch = getChildrens(parentCursor)
                if (fn.returnType instanceof BaseType && fn.returnType.base.name === 'void') {
                    if (ch.length === fn.args.length) {
                        for (let i = 0; i < ch.length; ++i) {
                            fn.args[i].name = ch[i].spelling
                        }
                    } else {
                        throw Error('can`t parse argument names')
                    }
                } else {
                    if (ch.length - 1 === fn.args.length) {
                        for (let i = 0; i < ch.length - 1; ++i) {
                            fn.args[i].name = ch[i+1].spelling
                        }
                    } else {
                        throw Error('can`t parse argument names')
                    }
                }
            } else {
                throw Error('can`t parse argument names')
            }

            return fn
        default:
            if (typeKindMap[t.kind] === undefined) {
                throw Error(`Unknown type kind ${t.kind}: ${t.spelling}`)
            }
            return new BaseType(typeKindMap[t.kind])
    }
}

function parseFunction(fn): FnType {
    let result = new FnType()
    result.name = fn.spelling
    result.returnType = getType(fn.type.result)
    result.exported = false
    for (let c of getChildrens(fn)) {
        switch (c.kind) {
            case libclang.Cursor.DllExportAttr:
                result.exported = true
                break
            case libclang.Cursor.ParmDecl:
                result.args.push({
                    name: c.spelling,
                    type: getType(c.type),
                })
                break
        }
    }
    return result
}

function isFunctionExported(fn) {
    for (let c of getChildrens(fn)) {
        if (c.kind === libclang.Cursor.DllExportAttr || c.kind === libclang.Cursor.DllImportAttr || c.kind === libclang.Cursor.VisibilityAttr) {
            return true
        }
    }
    return false
}

function parseStruct(st, name) {
    let result = new StructType()
    result.name = name || st.spelling
    for (let c of getChildrens(st)) {
        switch (c.kind) {
            case libclang.Cursor.FieldDecl:
                result.fields.push({
                    name: c.spelling,
                    type: getType(c.type, c),
                })
                break
        }
    }
    return result
}

function parseEnum(st, name) {
    let result = new EnumType()
    result.name = name || st.spelling
    for (let c of getChildrens(st)) {
        result.fields.push({
            name: c.spelling,
            value: c.enumValue,
        })
    }
    return result
}

function parseTypedef(t, name) {
    let result = new TypedefType()
    result.name = name || t.spelling
    if (t.typedefType.kind === libclang.Type.Elaborated && t.typedefType.declaration.spelling === '') {
        result.type = parseChild(t.typedefType.declaration, t.spelling)
        if (!result.type) {
            throw Error('wtf')
            return null
        }
    } else {
        result.type = getType(t.typedefType, t)
    }
    return result
}

function exportMember(name) {
    // appendJs(`exports.${name} = ${name}`)
}


function isCursorDeclaredInSources(cursor, sources) {
    const cursorFilename = path.normalize(cursor.location.presumedLocation.filename)
    for (const p of sources) {
        if (path.normalize(p) === cursorFilename) {
            return true
        }
    }
    return false
}


function appendJs(content: string) {
    if (!args.output) {
        console.log(content)
    }
    resultJs += content + '\n'
}

function appendTs(content: string) {
    if (!args.output) {
        console.log(content)
    }
    resultTs += content + '\n'
}

function getJsType(t: Type): string {
    if (t instanceof BaseType) {
        return t.base.refType
    } else if (t instanceof RefType) {
        return `ref.refType(${getJsType(t.ref)})`
    } else if (t instanceof ArrayType) {
        return `ArrayType(${getJsType(t.type)}, ${t.length})`
    } else if (t instanceof StructType) {
        return 'exports.' + t.name
    } else if (t instanceof TypedefType) {
        if (t.type instanceof EnumType) {
            return 'ref.types.int'
        }
        return 'exports.' + t.name
    } else if (t instanceof EnumType) {
        return 'ref.types.int'
    } else if (t instanceof FnType) {
        return `ffi.Function(${getJsType(t.returnType)}, [${t.args.map(a => getJsType(a.type)).join(', ')}])`
    }
    throw Error(`Unknown type ${t.name} ${t.kind}`)
}

function getTsEndBaseType(t: Type): string {
    if (t instanceof BaseType) {
        if (t.base.tsType === TypescriptType.asis) {
            return t.base.refTypeTs
        }
        switch (t.base.tsType) {
            case TypescriptType.boolean:
                return 'boolean'
            case TypescriptType.number:
                return 'number'
            default:
                throw Error('Unknown ts type')
        }
    } else if (t instanceof TypedefType) {
        return getTsEndBaseType(t.type)
    }
    return null
}

function getTsType(t: Type, parent: Type = null): string {
    if (t instanceof BaseType) {
        if ((parent && parent instanceof RefType) || t.base.tsType === TypescriptType.asis) {
            return t.base.refTypeTs
        }
        switch (t.base.tsType) {
            case TypescriptType.boolean:
                return 'boolean'
            case TypescriptType.number:
                return 'number'
            default:
                throw Error('Unknown ts type')
        }
    }

    const endBaseType = getTsEndBaseType(t)
    if (endBaseType && (!parent || parent.kind !== TypeKind.ref)) return endBaseType

    if (t instanceof RefType) {
        return `ref.Ref<${getTsType(t.ref, t)}>`
    } else if (t instanceof ArrayType) {
        return `Array<${getTsType(t.type, t)}>`
    } else if (t instanceof StructType) {
        return t.name
    } else if (t instanceof TypedefType) {
        return t.name
    } else if (t instanceof EnumType) {
        return t.name
    } else if (t instanceof FnType) {
        return `(${t.args.map(a => `${a.name}: ${getTsType(a.type, t)}`).join(', ')}) => ${getTsFnReturnType(t.returnType, t)}`
    }
    throw Error(`Unknown type ${t.name} ${t.kind}`)
}

function getTsFnReturnType(t: Type, parent: Type = null) {
    const type = getTsType(t, parent)
    if (type === 'ref.types.rvoid') {
        return 'void'
    } else {
        return type
    }
}

//let cs = getChildrens(tu.cursor)
function parseChild(c, spelling = undefined): Type {
    let name = spelling === undefined ? c.spelling : spelling
    // appendJs(`--- ${c.spelling}`)
    switch (c.kind) {
        // case libclang.Cursor.FunctionDecl:
        //   //if (c.spelling === 'st_harvester_create_mesh_job')
        //   {
        //     let fn = parseFunction(c)
        //     if (fn.exported) {
        //       fns.push(fn)
        //     }
        //   }
        //   break;
        case libclang.Cursor.TypedefDecl:
            if (!typedefs[name]) {
                let t = parseTypedef(c, name)
                typedefs[name] = t
                if (!(t.type instanceof EnumType || t.type instanceof StructType) || t.type.name !== t.name) {
                    appendJs(`exports.${t.name} = ${getJsType(t.type)}`)
                    if (t.type instanceof FnType) {
                        appendTs(`export declare type ${t.name} = ${getTsType(t.type)}`)
                    } else {
                        appendTs(`export declare class ${t.name} extends ${getTsType(t.type, new RefType(null))} {\n    ${t.name}()\n}`)
                    }
                }
            }
            return typedefs[name]
        case libclang.Cursor.EnumDecl:
            if (!enums[name]) {
                let en = parseEnum(c, name)
                enums[name] = en
                appendJs(`exports.${en.name} = {\n${en.fields.map(e => `    ${e.name}: ${e.value},\n`).join('')}}`)
                appendTs(`export declare enum ${en.name} {\n${en.fields.map(e => `    ${e.name},\n`).join('')}}`)
            }
            return enums[name]
        case libclang.Cursor.StructDecl:
            if (!structs[name]) {
                let st = parseStruct(c.definition, name)
                structs[name] = st
                appendJs(`exports.${st.name} = StructType({\n${st.fields.map(e => `    ${e.name}: ${getJsType(e.type)},\n`).join('')}})`)
                appendTs(`export declare class ${st.name} extends ref.Type {
${st.fields.map(e => `    ${e.name}: ${getTsType(e.type)}\n`).join('')}    constructor(data?: Partial<${st.name}>)
    ${st.name}()
}`)
            }
            return structs[name]
        default:
            return null
    }
}

function parseExportedFunctions(fileCursor, sources) {
    let cs = getChildrens(fileCursor)
    for (let c of cs) {
        if (!isCursorDeclaredInSources(c, sources)) continue
        // console.log(c.spelling, '=', c.kind, c.type.kind)
        if (c.kind === libclang.Cursor.FunctionDecl) {
            if (isFunctionExported(c)) {
                let fn = parseFunction(c)
                let a = isCursorDeclaredInSources(c, sources)
                fns.push(fn)
            }
        } else if (c.spelling) {
            parseChild(c)
        }
    }
}

function parseSource(source, args, sources) {
    // console.log('Parsing:', source, 'args:', args)
    let tu = new libclang.TranslationUnit.fromSource(index, source, args)
    parseExportedFunctions(tu.cursor, sources)
}



function parseSources(libraryName, sources, args) {
    // args.push('-I/usr/include')
    if (process.platform !== 'win32') {
        args.push('-I/usr/lib/clang/6.0/include')
    }
    fns = []
    for (const source of sources) {
        parseSource(source, args, sources)
    }
    appendJs(`
exports.load${libraryName}Library = function(path) { 
    const lib = ffi.Library(path, {\n${fns.map(fn => `        '${fn.name}': [${getJsType(fn.returnType)}, [${fn.args.map(p => getJsType(p.type)).join(', ')}]],\n`).join('')}    })
    let result = {
        _lib: lib,
    }
    for (const [fnName, fn] of Object.entries(lib)) {
        result[fnName+'_sync'] = fn
        result[fnName] = util.promisify(fn.async)
    }
    return result    
}`)
    appendTs(`
export interface ${libraryName}Library {
${fns.map(fn => `    ${fn.name}_sync(${fn.args.map((p, index) => (p.name != '' ? p.name : 'arg' + index) + ': ' + getTsType(p.type)).join(', ')}): ${getTsFnReturnType(fn.returnType)}`).join('\n')}

${fns.map(fn => `    ${fn.name}(${fn.args.map((p, index) => (p.name != '' ? p.name : 'arg' + index) + ': ' + getTsType(p.type)).join(', ')}): Promise<${getTsFnReturnType(fn.returnType)}>`).join('\n')}
}`)

    appendTs(`export declare function load${libraryName}Library(path: string): ${libraryName}Library`)

//     appendJs(`
// export interface ${libraryName}Library {
// ${fns.map(fn => `    ${fn.name}(${fn.args.map((p, index) => (p.name != '' ? p.name : 'arg' + index) + ': ' + getTypescriptType(p.type)).join(', ')}): ${getTypescriptType(fn.returnType)}`).join('\n')}
// }
// export interface ${libraryName}AsyncLibrary {
// ${fns.map(fn => `    ${fn.name}(${fn.args.map((p, index) => (p.name != '' ? p.name : 'arg' + index) + ': ' + getTypescriptType(p.type)).join(', ')}): Promise<${getTypescriptType(fn.returnType)}>`).join('\n')}
// }
// export function promisify${libraryName}Library(lib: ${libraryName}Library): ${libraryName}AsyncLibrary {
//     let asyncLib: any = {}
//     for (const [fnName, fn] of Object.entries(lib)) {
//         asyncLib[fnName] = util.promisify(fn.async)
//     }
//     return asyncLib as ${libraryName}AsyncLibrary
// }
// export function load${libraryName}Library(path: string): ${libraryName}Library {
//     return ffi.Library(path, {\n${fns.map(fn => `    '${fn.name}': [${fn.returnType}, [${fn.args.map(p => p.type).join(', ')}]]`).join(',\n')}})
// }`)

}

appendJs(`
const ffi = require('ffi')
const ref = require('ref')
const ArrayType = require('ref-array')
const StructType = require('ref-struct')
const util = require('util')

ref.types.rvoid = ref.types.void
ref.Ref = ref.refType(ref.types.size_t)
ref.allocBuffer = function(size) {
    return Buffer.alloc(size)
}
ref.allocEnum = function() {
    return ref.alloc(ref.types.int)
}
ref.getBuffer = function(t) {
    return t
}
ref.fromBuffer = function(buffer) {
    return buffer
}
ref.toVoidRef = function(r) {
    return r
}
ref.fromNumber = function(num) {
    return num
}
ref.NULL_CALLBACK = ref.NULL
`)
appendTs(`
import * as ref from 'ref'
import * as ArrayType from 'ref-array'
import * as StructType from 'ref-struct'
import * as util from 'util'
`)

parseSources('Harvester', [
    `${skytechSdkFolder}/include/st/harvester/harvester.h`,
    `${skytechSdkFolder}/include/st/harvester/common.h`,
    `${skytechSdkFolder}/include/st/harvester/jobs.h`,
    `${skytechSdkFolder}/include/st/harvester/job_lists.h`,
    `${skytechSdkFolder}/include/st/harvester/map_tools.h`,
    `${skytechSdkFolder}/include/st/harvester/utils.h`,
], [
    `-I${skytechSdkFolder}/include`,
    `-I${skytechSdkFolder}/unistore/unistore/include`,
])

parseSources('HeightmapEditor', [
    `${skytechSdkFolder}/include/st/heightmap_editor/heightmap_editor.h`,
], [
    `-I${skytechSdkFolder}/include`,
])

parseSources(`CompositeAdapter`, [
    `${skytechSdkFolder}/unistore/unistore/include/st/unistore/unistore.h`,
    `${skytechSdkFolder}/unistore/unistore/include/st/unistore/plugin.h`,
    `${skytechSdkFolder}/unistore/composite_adapter/include/st/unistore/composite_adapter/plugin.h`,
], [
    `-I${skytechSdkFolder}/include`,
    `-I${skytechSdkFolder}/unistore/unistore/include`,
])
parseSources(`BundleFsAdapter`, [
    `${skytechSdkFolder}/unistore/unistore/include/st/unistore/unistore.h`,
    `${skytechSdkFolder}/unistore/unistore/include/st/unistore/plugin.h`,
    `${skytechSdkFolder}/unistore/bundle_fs_adapter/include/st/bundle_fs_adapter/bundle_fs_adapter.h`,
], [
    `-I${skytechSdkFolder}/include`,
    `-I${skytechSdkFolder}/unistore/unistore/include`,
])
parseSources(`LoggingAdapter`, [
    `${skytechSdkFolder}/unistore/unistore/include/st/unistore/unistore.h`,
    `${skytechSdkFolder}/unistore/unistore/include/st/unistore/plugin.h`,
    `${skytechSdkFolder}/unistore/logging_adapter/include/st/logging_adapter/logging_adapter.h`,
], [
    `-I${skytechSdkFolder}/include`,
    `-I${skytechSdkFolder}/unistore/unistore/include`,
])
parseSources(`RamStorage`, [
    `${skytechSdkFolder}/unistore/unistore/include/st/unistore/unistore.h`,
    `${skytechSdkFolder}/unistore/unistore/include/st/unistore/plugin.h`,
    `${skytechSdkFolder}/unistore/ram_storage/include/st/ram_storage/ram_storage.h`,
], [
    `-I${skytechSdkFolder}/include`,
    `-I${skytechSdkFolder}/unistore/unistore/include`,
])
parseSources(`FsStorage`, [
    `${skytechSdkFolder}/unistore/unistore/include/st/unistore/unistore.h`,
    `${skytechSdkFolder}/unistore/unistore/include/st/unistore/plugin.h`,
    `${skytechSdkFolder}/unistore/fs_storage/include/st/fs_storage/plugin.h`,
], [
    `-I${skytechSdkFolder}/include`,
    `-I${skytechSdkFolder}/unistore/unistore/include`,
])
parseSources(`BundleStorage`, [
    `${skytechSdkFolder}/unistore/unistore/include/st/unistore/unistore.h`,
    `${skytechSdkFolder}/unistore/unistore/include/st/unistore/plugin.h`,
    `${skytechSdkFolder}/unistore/bundle_storage/include/st/bundle_storage/bundle_storage.h`,
], [
    `-I${skytechSdkFolder}/include`,
    `-I${skytechSdkFolder}/unistore/unistore/include`,
])
parseSources(`NetworkAdapterServer`, [
    `${skytechSdkFolder}/unistore/network_adapter/server/include/st/unistore/network_adapter/server/server.h`,
], [
    `-I${skytechSdkFolder}/include`,
    `-I${skytechSdkFolder}/unistore/unistore/include`,
])
parseSources(`NetworkAdapterClient`, [
    `${skytechSdkFolder}/unistore/unistore/include/st/unistore/unistore.h`,
    `${skytechSdkFolder}/unistore/unistore/include/st/unistore/plugin.h`,
    `${skytechSdkFolder}/unistore/network_adapter/client/include/st/unistore/network_adapter/client/plugin.h`,
], [
    `-I${skytechSdkFolder}/include`,
    `-I${skytechSdkFolder}/unistore/unistore/include`,
])
parseSources(`UnistoreSyncAdapter`, [
    `${skytechSdkFolder}/unistore/unistore/include/st/unistore/unistore.h`,
    `${skytechSdkFolder}/unistore/unistore/include/st/unistore/plugin.h`,
    `${skytechSdkFolder}/unistore/sync_adapter/include/st/unistore/sync_adapter/plugin.h`,
], [
    `-I${skytechSdkFolder}/include`,
    `-I${skytechSdkFolder}/unistore/unistore/include`,
])
parseSources(`UnistoreAsyncAdapter`, [
    `${skytechSdkFolder}/unistore/unistore/include/st/unistore/unistore.h`,
    `${skytechSdkFolder}/unistore/unistore/include/st/unistore/plugin.h`,
    `${skytechSdkFolder}/unistore/async_adapter/include/st/unistore/async_adapter/plugin.h`,
], [
    `-I${skytechSdkFolder}/include`,
    `-I${skytechSdkFolder}/unistore/unistore/include`,
])

//Ref<typeof st_depot_error_e>
//appendJs(`const libFile = 'd:\\\\projects\\\\atlas\\\\skykit\\\\build\\\\x64\\\\release\\\\depot.dll'`)
//exportMember('library')

index.dispose()
//tu.dispose();

if (args.output) {
    fs.ensureDirSync(path.dirname(args.output))
    fs.writeFileSync(args.output + '.js', resultJs)
    fs.writeFileSync(args.output + '.d.ts', resultTs)
}

if (process.versions['electron']) {
    require('electron').app.exit(0)
}
