var fs = require('fs'),
	http = require('http'),
	express = require('express'),
	http = require('http'),
	path = require('path');
var app = express();
/*http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World\n');
}).listen(3000, '127.0.0.1');*/
//  mongo --shell --host ds035488.mongolab.com --port 35488 -u admin -p admin nitroussample 



app.configure(function () {
  app.set('port', process.env.PORT || 3000);
  app.use(express.logger('dev'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(path.join(__dirname, 'public')));
});

app.get('/', function (req, res) {
  fs.readFile('../index.html', 'utf8', function (err, text) {
    res.send(text);
  });
});
http.createServer(app).listen(app.get('port'), function () {
  console.log("Express server listening on port " + app.get('port'));
});