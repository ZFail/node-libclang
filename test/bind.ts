import * as ref from "ref"
import * as ArrayType from 'ref-array'
const StructType = require('ref-struct')
import * as libc from './clangb'
import {CXCursor} from "./clangb";

// interface Arr<T> {
//     [n: number]: T;
//     length: number;
//     buffer: Ref<T>
// }

// function makeArray<T>(t: new (...args) => T, length: number): Arr<T>  {
//     return ArrayType(t)(length)
// }
//
// function makeRef<T>(t: T): ref.Ref<T> {
//     return ref.refType(t as any) as any
// }
//
// declare interface RefTypes {
//     uint32: typeof Number
//     char: typeof Number
// }
// const TranslationUnit = ref.refType(ref.types.rvoid)

const ind = libc.lib.clang_createIndex(0, 1)

let args = new ArrayType(ref.refType(ref.types.char))(0)
// args[0] = libc.makeString('-Ic:/dev')
let tu = libc.lib.clang_createTranslationUnitFromSourceFile(ind, libc.makeString('./test.h'), args.length, args.buffer, 0, null)
let cursor = libc.lib.clang_getTranslationUnitCursor(tu)
console.log(libc.getNullTerminatedString(libc.lib.clang_getCString(libc.lib.clang_getCursorSpelling(cursor))))
function visitor(cursor: CXCursor, parent: CXCursor, clientData: Object): number {
    console.log(libc.getNullTerminatedString(libc.lib.clang_getCString(libc.lib.clang_getCursorSpelling(parent))),
        '=>', libc.getNullTerminatedString(libc.lib.clang_getCString(libc.lib.clang_getCursorSpelling(cursor))))
    console.log(clientData)
    return 1
}
libc.lib.clang_visitChildren(cursor, visitor, {a: 1})
