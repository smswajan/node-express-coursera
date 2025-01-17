const express = require('express');
const http = require('http');
const morgan = require('morgan');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));

app.use(express.static(__dirname + '/public'));

app.use((req, res, next) => {
    res.sendStatus = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h2>This is an express server</h2></body></html>');
})

const server = http.createServer(app);

server.listen(port, hostname, ()=>{
    console.log(`Server is running at ${hostname}:${port}`)
})