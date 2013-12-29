require('http').createServer(function (req, res) {
	if (req.url === '/') {
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.end([
			'<form method="POST" action="/url">',
			'<fieldset>',
			'<label>Personal Information</label>',
			'<p>What is your name</p>',
			'<input type="text" name="name">',
			'<p><button>Submit</button></p>',
			'</form>'
			].join(''));
	} else if (req.url === '/url' && req.method === 'POST') {
		var body = '';
		req.on('data', function (chunk) {
			body += chunk;
		});
		req.on('end', function () {
			res.writeHead(200, {'Content-Type': 'text/html'});
			res.end('<p>Content-Type: ' + req.headers['content-type'] + '</p>'
			+ '<p>Data:</p><pre>' + body + '</pre>');
		}); 
	}
}).listen(3000);

/**
 * req.url: this refers to the url requesed by the user. get request.
 * req.method: this could be get or post request.
 */