let http = require('http');
http.createServer((req,res)=>{
    res.writeHead(200,{'Content-type':'text/html'})
    res.write("server created........ ")
    res.end("in server");   
}).listen(8080)