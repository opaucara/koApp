var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000, '0.0.0.0');
console.log('Server rfsdfdunning at http://0.0.0.0:3000/');
//  mongo --shell --host ds035488.mongolab.com --port 35488 -u admin -p admin nitroussample 