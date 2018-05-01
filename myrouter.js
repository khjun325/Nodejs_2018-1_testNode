function route(pathname, handle, res) {
    console.log('Routing for' + pathname);
    if (typeof handle[pathname] === 'function')  // handle 모듈안에 조건
    handle[pathname](res);
    else {
        res.writeHead(404, {'Content-Type' : 'text/html'});
        res.write('404 Not found!');
        res.end();
    }
}

exports.route = route; //export : 외부로 보내는것