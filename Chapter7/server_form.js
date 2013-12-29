//server processes form
var qs = require('querystring');

require('http').createServer(function (req, res) {
	var body ='';

	req.on('data', function (chunk) {
		body += chunk;
	});

	req.on('end', function () {
		res.writeHead(200);
		res.end('Done');
		console.log('got the name ' + qs.parse(body.name));
	});
}).listen(3000);