const fs = require('node:fs').promises;

async function  countStudents(){
    try{
        const data = await fs.readFile('database.csv', 'utf-8');
        const lines = data.split('\n');
        const fields = {};
        for (const line of lines) {
            if (line.trim() !== '') {
                const student = line.split(',');
                const field = student[3].trim();
                if (field !== '') {
                    if (fields[field]) {
                        fields[field].push(student[0]);
                    } else {
                        fields[field] = [student[0]];
                    }
                }
            }
        }
        console.log(`Number of students: ${lines.length - 1}`);
        for (const field in fields) {
            console.log(`Number of students in ${field}: ${fields[field].length}. List: ${fields[field].join(', ')}`);
        }
    } catch (error) {
        console.log('Cannot read the database:', error.message);
    }
}
countStudents('database.csv');

module.exports = countStudents;










// const fs = require('node:fs');
// const fsPromises = fs.promises;
// 
// async function countStudents() {
//     const data = await fsPromisess.readFile('database.csv', 'utf-8');
//     const lines = data.split('\n');
//     const fields = {};
//     for (const line of lines) {
//         const student = line.split(',');
//         if (fields[student[3]]) {
//             fields[student[3]].push(student[0]);
//         } else {
//             fields[student[3]] = [student[0]];
//         }
//     }
// }