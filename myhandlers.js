const queryString = require('querystring')
const twitter = require('./brainDemoTwitterDonKim');
const myBrain = require('./myBrain');
const myData = require('./twitterDonKim');

let trainedNet = myBrain.train(myData.trainingData);

function sleep(millisec) {
    let timeStart = new Date().getTime();
    while (new Date().getTime() < timeStart + millisec); //new를 써야만 생성자 호출되어 필요한 초기화가 가능
}

function start(res) {
    let sBody = '<html>' + '<head>' +
        '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />' +
        '</head>' + '<body>' +
        '이름과 별명을 입력하세요.<br>' +
        '<form action="/hello" method="post">' +
        '<input type="text" name="myName" /><br>' +
        '<button type="submit">입력 완료</button>' +
        '</form>' + '</body>' + '</html>';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(sBody);
    res.end();
}
function hello(res, postData) {
    let input = queryString.parse(postData).myName;
    let result = myBrain.getResult(trainedNet,input);

    let sBody = '<html>' + '<head>' +
        '<meta http-equiv="Content-Type" content="text/html" charset="UTF-8" />' +
        '</head>' + '<body>' +
        'Trump, ' + Math.round(result.trump*100) + 'and'+
        'kardashian ' + Math.round(result.kardashian*100) + 
        '</body>' + '</html>';
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(sBody);
    res.end();
}
exports.start = start;
exports.hello = hello;