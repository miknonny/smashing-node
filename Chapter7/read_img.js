//read Image as input from a stream.

require('http').createServer(function (req, res) {
	res.writehead(200, {'Content-Type': 'img/png'});
	
	var stream = require('fs').createReadStream('image.png');
	stream.on('data' function (data) {
		res.write(data);
	});
	
	stream.on('end', function () {
		res.end();
	});

}).listen(3000);








/**
* writing streams as a series of chunks you ensure efficient memory allocation.
*fs.readFile makes you use more memory incase of concurrent  request.
*/

