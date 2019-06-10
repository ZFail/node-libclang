import * as ref from "ref"
import * as ArrayType from "ref-array"

export declare function makeString(str: string): ref.Ref<ref.types.char>
export declare function getNullTerminatedString(ref: ref.Ref<ref.types.char>): string
export declare class CXTranslationUnit extends ref.Ref<ref.types.rvoid> {}
export declare class CXIndex extends ref.Ref<ref.types.rvoid> {}
export declare class CXUnsavedFile extends ref.Ref<ref.types.rvoid> {}
export type CXCursorVisitor = (cursor: CXCursor, parent: CXCursor, clientData: Object) => number

export interface LibClang {
    clang_createTranslationUnitFromSourceFile(CIdx: CXIndex, source_filename: ref.Ref<ref.types.char>,
                                              num_clang_command_line_args: number,
                                              clang_command_line_args: ref.Ref<ref.Ref<ref.types.char>>,
                                              num_unsaved_files: number,
                                              unsaved_files: ref.Ref<CXUnsavedFile>): CXTranslationUnit
    clang_getTranslationUnitCursor(tu: CXTranslationUnit): CXCursor
    clang_getCursorSpelling(c: CXCursor): CXString
    clang_getCString(str: CXString): ref.Ref<ref.types.char>
    clang_visitChildren(parent: CXCursor, visitor: CXCursorVisitor, clientData: Object): number
    clang_createIndex(excludeDeclarationsFromPCH: number, displayDiagnostics: number): CXIndex
}
export declare const lib: LibClang
export declare const ind: CXIndex
export declare class CXCursor extends ref.Type {
    kind: number
    xdata: number
    data: ArrayType<ref.Ref<ref.types.rvoid>>
    constructor(data: {
        kind: number
        xdata: number
        data: ArrayType<ref.Ref<ref.types.rvoid>>
    })
}
export declare class CXString extends ref.Type {
    data: ref.Ref<ref.types.rvoid>
    private_flags: number
    constructor(data: {
        data: ref.Ref<ref.types.rvoid>
        private_flags: number
    })
}
export declare class Disp extends ref.Type {
    data: CXCursorVisitor
    constructor(data: {
        data: CXCursorVisitor
    })
}
