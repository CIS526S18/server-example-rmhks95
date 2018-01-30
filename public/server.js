"use strict";

//PORT definition
const PORT = 3000;

// Import the HTTP library
const http = require('http');

// import the fs library
const fs = require('fs');

function handleRequest(req, res){
    console.log(req.url);
    switch(req.url){
        case '/':
        case '/openhouse.html':
            res.end(fs.readFileSync('openhouse.html'));
            break;
        case '/openhouse.css':
            res.end(fs.readFileSync('openhouse.css'));
            break;
        case '/openhouse.js':
            res.end(fs.readFileSync('openhouse.js'));
            break;
        default:
            res.statusCode = 404;
            res.end("File Not Found");
    }
    
}

// Create the web server
var server = http.createServer(handleRequest);

//Start listening on port that is set above
server.listen(PORT, function(){
    console.log("Listening on port " + PORT);
});