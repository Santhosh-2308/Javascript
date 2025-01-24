const http = require('http')//importing http
const greeting = require('./locMod')

http.createServer((req,res)=>{
    res.write(greeting);
    res.end();

}).listen(5000)
