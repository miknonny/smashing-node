//simple http client

require('http').request({
	host: '127.0.0.1',
	port: 3000,
	url: '/',
	method: 'GET'
}, function (res) {
	var body = '';
	res.setEncoding('utf-8');
	res.on('data', function (chunk) {
		body += chunk;
	})
	res.on('end', function () {
		console.log('we got: ' + body);
	});
}).end();

//notice that we also have to call end or else this will continue indefinitely.
