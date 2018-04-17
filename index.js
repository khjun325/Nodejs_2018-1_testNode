let nport=8000;
let sHost='localhost'
const myServer = require('./myServer');
const myRouter = require('./myrouter');
const myHandlers = require('./myhandlers');

let handle = {};
handle['/'] = myHandlers.start;
handle['/start'] = myHandlers.start;
handle['/hello'] = myHandlers.hello;

myServer.start(nport, sHost, myRouter.route, handle);