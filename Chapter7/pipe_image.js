//piping streams.

require('http').createServer(function (req, res) {
	//first thing you do is write the head.
	res.writeHead(200, {'Content-Type': 'image/png'});
	var stream = require('fs').createReadStream('image.png').pipe(res);
})