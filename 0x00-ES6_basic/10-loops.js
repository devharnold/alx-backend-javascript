export default function appendToEachArrayValue(array, appendString) {
    const newArray = [];
    for (const value of array) {
        newArray.push(append.string + value);
    }
    return newArray;
}