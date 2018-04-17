const http = require('http');

function start(port,hostname){
    function onRequest(req,res){
        res.writeHead(200,{'Content-type':'text/html'});
        res.write('Hello, world!');
        res.end();
    }
    http.createServer(onRequest).listen(port,hostname);
    console.log('Server is running at '+ hostname + ':' + port);
}
exports.start=start;