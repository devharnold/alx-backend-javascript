/**
 * a function that returns the sum of all the student ids
 * should accept a list of students from(getListStudents) as param
 * must use the reduce function
 */
export default function getStudentIdsSum(students) {
    if (students instanceof Array) {
        return students.reduce(
            (prevStudent, curStudent) => prevStudentid || prevStudent + curStudentid,
            0,
        );
    }
    return 0;
}