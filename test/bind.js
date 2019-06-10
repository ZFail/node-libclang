"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ref = require("ref");
var ArrayType = require("ref-array");
var StructType = require('ref-struct');
var libc = require("./clangb");
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
var ind = libc.lib.clang_createIndex(0, 1);
var args = new ArrayType(ref.refType(ref.types.char))(0);
// args[0] = libc.makeString('-Ic:/dev')
var tu = libc.lib.clang_createTranslationUnitFromSourceFile(ind, libc.makeString('./test.h'), args.length, args.buffer, 0, null);
var cursor = libc.lib.clang_getTranslationUnitCursor(tu);
console.log(libc.getNullTerminatedString(libc.lib.clang_getCString(libc.lib.clang_getCursorSpelling(cursor))));
function visitor(cursor, parent, clientData) {
    console.log(libc.getNullTerminatedString(libc.lib.clang_getCString(libc.lib.clang_getCursorSpelling(parent))), '=>', libc.getNullTerminatedString(libc.lib.clang_getCString(libc.lib.clang_getCursorSpelling(cursor))));
    console.log(clientData);
    return 1;
}
libc.lib.clang_visitChildren(cursor, visitor, { a: 1 });
