
// ********************* Task 1 *********************
const http = require("http");
const os = require('os');
const path = require('path');


http.createServer(function(request, response) {
    response.writeHead(200, { 'Content-Type': 'text/html' });
    response.write(`<h1>System information</h2>
    								<div>Current user name: ${os.userInfo().username}</div>
    								<div>OS type: ${os.type()}</div>
    								<div>System work time: ${(os.uptime()/60).toFixed(2)} minutes</div>
    								<div>Current work directory: ${path.dirname(__filename)}</div>
    								<div>Server file name: ${path.basename(__filename)}</div>`);
    // response.write(`<div>Current work directory: ${__dirname}</div>`);
    response.end();


}).listen(5000);


// ********************* Task 2 *********************
/*const main = require("./main");
const http = require("http");

global.name = "Viktor";
http.createServer(function(request, response) {
    response.write(`<div>Date of request: ${date}</div>
   									<div>${main.getMessage()}</div>`);
    response.end();
}).listen(5000);*/