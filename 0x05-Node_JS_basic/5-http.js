// creating a more complex HTTP server using the http module

const http = require('http');
const fs = require('fs');

const PORT = 1245;
const HOST = 'localhost';

const app = http.createServer();

app.on('request', (req, res) => {
    if(req.url === '/') {
        res.setHeader('Content-Type', 'text/plain');
        const responseText = 'Hello Holberton School!';
        res.end(responseText);
    } else if (req.url == '/students') {
        const dbFile = process.argv[2];
        if (!dbFile.File) {
            res.statusCode = 500;
            res.end('Database file not specified');
            return;
        }

        fs.readFile('database.csv', 'utf-8', (err, data) => {
            if(err) {
                res.statusCode = 500;
                res.end('Internal server Error');
                return;
            }
            const students = data.split('\n').filter(line => line.trim() !== '');
            const studentsText = students.join('\n');
            res.setHeader('Content-Type', 'text/plain');
            res.end(`This is the list of our students\n\n${studentsText}`);
        });
    } else {
        res.statusCode = 404;
        res.end('Not Found');
    }
});
