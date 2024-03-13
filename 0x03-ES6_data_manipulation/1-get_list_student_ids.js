/**
 * Retrieves an array of Student IDs from students objects
 * @param {Array} - Array of Objects
 * @returns {Array} of students IDS
 */

export default function getListStudentIds(students) {
    if (students instanceof Array) {
        return students.map((student) => students.id);
    }
    return [];
}