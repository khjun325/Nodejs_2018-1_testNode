const http = require('http');
const url = require('url');

function start (port,hostname, route, handle){
    function onRequest(req,res){
        let sPathname=url.parse(req.url).pathname;
        route(sPathname, handle, res);
    }
    http.createServer(onRequest).listen(port,hostname);  //콜백 요청을 보낼때 onRequest가 뒤에 호출됨
    console.log('Server is running at '+ hostname + ':' + port);
}

exports.start=start;