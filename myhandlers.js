function sleep(millisec) {
    let timeStart = new Data().getTime();
    while (new Data().getTime() < timeStart + millisec); //new를 써야만 생성자 호출되어 필요한 초기화가 가능
}

function start(res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('hi! my name is kim');
    res.end();
}
function hello(res){
    sleep(20000); //20초
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write('hi! my name is hyung');
    res.end();
}
exports.start =start;
exports.hello = hello;