const http = require('http');
var myData = require('./mydata');

console.log("sidddd");

http.createServer((req, res) =>{
    res.write('Ganapati bappa moraya...\n');
    res.write(JSON.stringify(myData));
    res.end();
}).listen(4500);
