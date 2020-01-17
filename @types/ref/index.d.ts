// Type definitions for ref
// Project: https://github.com/TooTallNate/ref
// Definitions by: Paul Loyd <https://github.com/loyd>
// Definitions: https://github.com/DefinitelyTyped/DefinitelyTyped

/// <reference types="node" />

export declare abstract class Type {
    /** The size in bytes required to hold this datatype. */
    static size: number;
    /** The current level of indirection of the buffer. */
    static indirection: number;
    /** To invoke when `ref.get` is invoked on a buffer of this type. */
    static get(buffer: Buffer, offset: number): any;
    /** To invoke when `ref.set` is invoked on a buffer of this type. */
    static set(buffer: Buffer, offset: number, value: any): void;
    /** The name to use during debugging for this datatype. */
    static name?: string;
    /** The alignment of this datatype when placed inside a struct. */
    static alignment?: number;
}

/** A Buffer that references the C NULL pointer. */
export declare var NULL: Buffer;
/** A pointer-sized buffer pointing to NULL. */
export declare var NULL_POINTER: Buffer;
/** Get the memory address of buffer. */
export declare function address(buffer: Buffer): number;
/** Allocate the memory with the given value written to it. */
export declare function alloc<T extends Type>(type: new (...args) => T, value?: any): Ref<T>;
/** Allocate the memory with the given value written to it. */
export declare function alloc(type: string, value?: any): Buffer;

/**
 * Allocate the memory with the given string written to it with the given
 * encoding (defaults to utf8). The buffer is 1 byte longer than the
 * string itself, and is NULL terminated.
 */
export declare function allocCString(string: string, encoding?: string): Buffer;

/** Coerce a type.*/
export declare function coerceType(type: Type): Type;
/** Coerce a type. String are looked up from the ref.types object. */
export declare function coerceType(type: string): Type;

/**
 * Get value after dereferencing buffer.
 * That is, first it checks the indirection count of buffer's type, and
 * if it's greater than 1 then it merely returns another Buffer, but with
 * one level less indirection.
 */
export declare function deref(buffer: Buffer): any;

/** Create clone of the type, with decremented indirection level by 1. */
export declare function derefType(type: Type): Type;
/** Create clone of the type, with decremented indirection level by 1. */
export declare function derefType(type: string): Type;
/** Represents the native endianness of the processor ("LE" or "BE"). */
export declare var endianness: string;
/** Check the indirection level and return a dereferenced when necessary. */
export declare function get(buffer: Buffer, offset?: number, type?: Type): any;
/** Check the indirection level and return a dereferenced when necessary. */
export declare function get(buffer: Buffer, offset?: number, type?: string): any;
/** Get type of the buffer. Create a default type when none exists. */
export declare function getType(buffer: Buffer): Type;
/** Check the NULL. */
export declare function isNull(buffer: Buffer): boolean;
/** Read C string until the first NULL. */
export declare function readCString(buffer: Buffer, offset?: number): string;

/**
 * Read a big-endian signed 64-bit int.
 * If there is losing precision, then return a string, otherwise a number.
 * @return {number|string}
 */
export declare function readInt64BE(buffer: Buffer, offset?: number): any;

/**
 * Read a little-endian signed 64-bit int.
 * If there is losing precision, then return a string, otherwise a number.
 * @return {number|string}
 */
export declare function readInt64LE(buffer: Buffer, offset?: number): any;

/** Read a JS Object that has previously been written. */
export declare function readObject(buffer: Buffer, offset?: number): Object;
/** Read data from the pointer. */
export declare function readPointer(buffer: Buffer, offset?: number,
    length?: number): Buffer;
/**
 * Read a big-endian unsigned 64-bit int.
 * If there is losing precision, then return a string, otherwise a number.
 * @return {number|string}
 */
export declare function readUInt64BE(buffer: Buffer, offset?: number): any;

/**
 * Read a little-endian unsigned 64-bit int.
 * If there is losing precision, then return a string, otherwise a number.
 * @return {number|string}
 */
export declare function readUInt64LE(buffer: Buffer, offset?: number): any;

/** Create pointer to buffer. */
export declare function ref(buffer: Buffer): Buffer;
/** Create clone of the type, with incremented indirection level by 1. */
export declare function refType<T extends Type>(t: new (...args) => T): new (...args) => Ref<T>;

/**
 * Create buffer with the specified size, with the same address as source.
 * This function "attaches" source to the returned buffer to prevent it from
 * being garbage collected.
 */
export declare function reinterpret(buffer: Buffer, size: number,
    offset?: number): Buffer;
export declare function reinterpret<T>(valueRef: Ref<T>, size: number,
                                    offset?: number): Ref<T>;
/**
 * Scan past the boundary of the buffer's length until it finds size number
 * of aligned NULL bytes.
 */
export declare function reinterpretUntilZeros(buffer: Buffer, size: number,
    offset?: number): Buffer;

/** Write pointer if the indirection is 1, otherwise write value. */
export declare function set<T>(valueRef: Ref<T>, offset: number, value: any): void;
export declare function set(buffer: Buffer, offset: number, value: any, type?: Type): void;
/** Write pointer if the indirection is 1, otherwise write value. */
export declare function set(buffer: Buffer, offset: number, value: any, type?: string): void;
/** Write the string as a NULL terminated. Default encoding is utf8. */
export declare function writeCString(buffer: Buffer, offset: number,
    string: string, encoding?: string): void;
/** Write a big-endian signed 64-bit int. */
export declare function writeInt64BE(buffer: Buffer, offset: number, input: number): void;
/** Write a big-endian signed 64-bit int. */
export declare function writeInt64BE(buffer: Buffer, offset: number, input: string): void;
/** Write a little-endian signed 64-bit int. */
export declare function writeInt64LE(buffer: Buffer, offset: number, input: number): void;
/** Write a little-endian signed 64-bit int. */
export declare function writeInt64LE(buffer: Buffer, offset: number, input: string): void;

/**
 * Write the JS Object. This function "attaches" object to buffer to prevent
 * it from being garbage collected.
 */
export declare function writeObject(buffer: Buffer, offset: number, object: Object): void;

/**
 * Write the memory address of pointer to buffer at the specified offset. This
 * function "attaches" object to buffer to prevent it from being garbage collected.
 */
export declare function writePointer(buffer: Buffer, offset: number,
    pointer: Buffer): void;

/** Write a little-endian unsigned 64-bit int. */
export declare function writeUInt64BE(buffer: Buffer, offset: number, input: number): void;
/** Write a little-endian unsigned 64-bit int. */
export declare function writeUInt64BE(buffer: Buffer, offset: number, input: string): void;

/**
 * Attach object to buffer such.
 * It prevents object from being garbage collected until buffer does.
 */
export declare function _attach(buffer: Buffer, object: Object): void;

/** Same as ref.reinterpret, except that this version does not attach buffer. */
export declare function _reinterpret(buffer: Buffer, size: number,
    offset?: number): Buffer;
/** Same as ref.reinterpretUntilZeros, except that this version does not attach buffer. */
export declare function _reinterpretUntilZeros(buffer: Buffer, size: number,
    offset?: number): Buffer;
/** Same as ref.writePointer, except that this version does not attach pointer. */
export declare function _writePointer(buffer: Buffer, offset: number,
    pointer: Buffer): void;
/** Same as ref.writeObject, except that this version does not attach object. */
export declare function _writeObject(buffer: Buffer, offset: number, object: Object): void;
export interface UInt32Type extends Type {
}
export interface CharType extends Type {
}
/** Default types. */
// export declare var types: {
//     void: Type; int64: Type; ushort: Type;
//     int: Type; uint64: Type; float: Type;
//     uint: Type; long: Type; double: Type;
//     int8: Type; ulong: Type; Object: Type;
//     uint8: Type; longlong: Type; CString: Type;
//     int16: Type; ulonglong: Type; bool: Type;
//     uint16: Type; char: CharType; byte: Type;
//     int32: Type; uchar: Type; size_t: Type;
//     uint32: UInt32Type; short: Type;
// };

export declare namespace types {
    class int extends Type {
        valueOf(): number
    }
    class float extends Type {
        valueOf(): number
    }
    class int32 extends Type {
        valueOf(): number
    }
    class uint32 extends Type {
        valueOf(): number
    }
    class uint64 extends Type {
        valueOf(): number
    }
    class char extends Type {
    }
    class uchar extends Type {
    }
    class uint8 extends Type {}
    class longlong extends Type {}
    class CString extends Type {}
    class int16 extends Type {}
    class ulonglong extends Type {}
    class bool extends Type {}
    class uint16 extends Type {}
    class byte extends Type {}
    class short extends Type {}
    class size_t extends Type {}
    class ushort extends Type {}
    class uint extends Type {}
    class long extends Type {}
    class double extends Type {}
    class int8 extends Type {}
    class ulong extends Type {}
    class rvoid extends Type {}
}

export declare class Ref<T> extends Type {
    deref(): T
    isNull(): boolean
}
