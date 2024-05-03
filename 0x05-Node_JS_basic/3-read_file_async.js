const fs = require('fs');

const countStudents = (dataPath) => {
    return new Promise((resolve, reject) => {
        fs.readFile(dataPath, 'utf-8', (err, data) => {
            if (err) {
                reject(new Error('Cannot read from database'));
            } else {
                const fileLines = data.trim().split('\n');
                const studentGroups = {};
                const dbFieldNames = fileLines[0].split(',');
                const studentPropNames = dbFieldNames.slice(0, dbFieldNames.length - 1);

                for (const line of fileLines.slice(1)) {
                    const studentRecord = line.split(',');
                    const studentPropValues = studentRecord.slice(0, studentRecord.length - 1);
                    const field = studentRecord[studentRecord.length - 1];
                    if (!studentGroups[field]) {
                        studentGroups[field] = [];
                    }
                    const studentEntry = {};
                    studentPropNames.forEach((propName, idx) => {
                        studentEntry[propName] = studentPropValues[idx];
                    });
                    studentGroups[field].push(studentEntry);
                }
                const totalStudents = Object.values(studentGroups)
                    .reduce((total, group) => total + group.length, 0);
                console.log(`Number of students: ${totalStudents}`);
                for (const [field, group] of Object.entries(studentGroups)) {
                    const studentNames = group.map(student => student.firstName).join(', ');
                    console.log(`Number of students in ${field}: ${group.length}. List: ${studentNames}`);
                }
                resolve(true);
            }
        });
    });
};

module.exports = countStudents;
