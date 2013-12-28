

require('http').createServer(function (req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain'})
	res.end('<h3>FUCK SHIT!</h3>');
}).listen(3000);