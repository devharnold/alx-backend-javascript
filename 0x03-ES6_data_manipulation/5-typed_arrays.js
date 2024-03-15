// function that returns a new ArrayBuffer with Int8 value
// should accept 3 arguments

export default function createInt8TypedArray(length, position, value) {
    let buffer = new ArrayBuffer(length);
    let int8Array= new Int8Array(buffer);

    if (position >= 0 && position < length) {
        int8Array[position] = value;
    } else {
        throw new Error("Position is outside range");
    }
    return buffer;
}