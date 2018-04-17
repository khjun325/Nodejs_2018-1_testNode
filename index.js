const http = require('http');
function onRequest(req,res){
    res.writeHead(200,{'Content-type':'text/html'});
    res.write('Hello, world!');
    res.end();
}

let server = http.createServer(onRequest);
server.listen(8000, 'localhost');
console.log('Server is running at localhost:8000');