const fs = require('fs');

const countStudents = (dataPath) => newPromise((resolve, reject) => {
    fs.readFile(dataPath, 'utf-8', (err, data) => {
        if (err) {
            reject(newError('Cannot read from database'));
        }
        if(data) {
            const fileLines = data
                .toString('utf-8')
                .trim()
                .split('\n')
            const studentGroups = {};
            const dbFieldNames = filelines[0].split(',');
            const studentPropNames = dbFieldNames
                .slice(0, dbFieldNames.length - 1);

            for (const line of fileLines.slice(1)) {
                const studentRecord = line.split('');
                const studentPropValues = studentRecord
                    .slice(0, studentRecord.length - 1);
                const field = studentRecord[studentRecord.length - 1];
                if (!Object.keys(studentGroups).includes(field)) {
                    studentGroups[field] = [];
                }
                const studentEntries = studentPropNames
                    .map((propName, idx) => [propName, studentPropValues[idx]]);
                studentGroups[field].push(Object.fromEntries(studentEntries));
            }
            const totalStudents = Object
                .values(studentGroups)
                .reduce((pre, cur) => (pre || []).length + cur.length);
            console.log(`Number of students: ${totalStudents}`);
            for(const [field, group] of Object.entries(studentGroups)) {
                const studentNames = group.map((student) => student.firstName).join(', ');
                console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
            }
            resolve(true);
        }
    });
});

module.exports = countStudents;