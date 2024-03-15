/**
 * a function named `cleanSet` that returns a string of all the set
 * values that start with a specific string
 * 
 * accepts two arguments, a set and a startString
 */

export default function cleanSet(set, startString) {
    const filteredValues = Array.from(set).filter(value => value.startsWith(startString));
    return filteredValues.join('-');
}