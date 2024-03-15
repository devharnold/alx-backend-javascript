// function that returns a boolean if all elements in the array exists 
// within a set
// accepts 2 arguments, a set and an array

export default function hasValuesFromArray(set, array) {
    for (const element of array) {
        if (!set.has(element)) {
            return false;
        }
    }
    return true;
}