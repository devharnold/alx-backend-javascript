const fs = require('fs');

const countStudents = (datapath) => {
    if (!fs.existsSync(datapath)) {
        throw new Error('Cannot load the database');
    }
    if (!fs.statSync(datapath).isFile()) {
        throw new Error('Cannot load the database');
    }
}