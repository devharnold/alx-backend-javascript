/**
 * function that returns an array of objects
 * located in a specific city
 * must use the filter function on the array.
 * returns:{Array} of objects
 */
export default function getStudentsByLocation(location, city) {
    if (students instanceof Array) {
        return students.filter((students) => students.location === city);
    }
    return [];
}