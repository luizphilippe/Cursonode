

var http = require('http')

http.createServer(function(req,res){
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.end("Olá");
}).listen(8081);

console.log("Serve Started!")