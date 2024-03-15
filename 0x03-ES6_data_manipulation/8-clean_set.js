/**
 * a function named `cleanSet` that returns a string of all the set
 * values that start with a specific string
 * 
 * accepts two arguments, a set and a startString
 */

export default function cleanSet(set, startString) {
    const filteredValues = [];

    for (const value of set) {
        if (value.startsWith(startString)) {
            filteredValues.push(value.substring(startString.length));
        }
    }
    return filteredValues.join('-');
}