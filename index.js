const http = require('http');
let server = http.createServer(function (req, res){
res.writeHead(200,{'Content-type':'text/html'});
res.write('Hello, world!');
res.end();
});
server.listen(8000, 'localhost');
console.log('Server is running at localhost:8000');