let nport=8000;
let sHost='localhost'
const myServer = require('./myServer');
const myRouter = require('./myrouter');

myServer.start(nport, sHost, myRouter.route);