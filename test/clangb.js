"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ref = require("ref");
var ArrayType = require("ref-array");
var StructType = require('ref-struct');
var libclang = require('../libclang');
exports.makeString = function(str) {
    return ref.allocCString(str);
}
exports.getNullTerminatedString = function(refChar) {
    return ref.readCString(refChar)
}

exports.CXTranslationUnit = libclang.lib.CXTranslationUnit
exports.CXCursor = libclang.lib.CXCursor
exports.CXString = libclang.lib.CXString
exports.lib = libclang.lib.libclang
