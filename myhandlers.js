function start(res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('hi! my name is kim');
    res.end();
}
function hello(res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('hi! my name is hyung');
    res.end();
}
exports.start =start;
exports.hello = hello;