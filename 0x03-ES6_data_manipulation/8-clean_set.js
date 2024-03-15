/**
 * a function named `cleanSet` that returns a string of all the set
 * values that start with a specific string
 * 
 * accepts two arguments, a set and a startString
 */

export default function cleanSet(set, startString) {
    const newValue = [];
    if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
        return '';
    }
    for (const value of set.values()) {
        if (typeof value === 'string' && value.startsWith(startString)) {
            const valueSubStr = value.substring(startString.length);

            if (valueSubStr && valueSubStr !== value) {
                newValue.push(valueSubStr);
            }
        }
    }
    return newValue.join('-');
}