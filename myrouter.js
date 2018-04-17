function route(pathname, handle) {
    console.log('Routing for' + pathname);
    if (typeof handle[pathname] === 'function')
    return handle[pathname]();
    else return '404 not found!';
}

exports.route = route;