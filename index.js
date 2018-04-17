/*console.log(typeof console === 'function');
console.log('Node.js version : ' + process.version);
console.log(process.memoryUsage());
console.log(process.env);*/
//console.log(module);

const circle = require('./circle');
console.log('Area of ac circle =' + circle.area(3)); //모듈을 사용한것
console.log('Circumference of ac circle =' + circle.circum(3));
console.log('Pi =' + circle.pi);

const square = require('./square');
let mysquare = square(5);
mysquare.width = 10;
console.log('Area of a square = '+ mysquare.area());
console.log('Circumference of ac square = '+ mysquare.circum());

const os = require('os');
console.log(os.type());
console.log(os.cpus());