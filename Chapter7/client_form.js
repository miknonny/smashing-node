// the clients does the opposite and tries to send the request.

var http = require('http'),
	qs = require('querystring');

function send (theName) {
	http.request({
		host: 'localhost',
		url: '/',
		method: 'post'
	}, function (res) {
			res.setEncoding('utf-8');
			res.on('end', function () {
				console.log('\n request complete!');
				process.stdout.write('\n yourname: ')
			});
	}).end(qs.stringify({name: theName}));

	process.stdout.write('\n your name: ');
	process.stdin.resume();
	process.stdin.setEncoding('utf-8');
	process.stdin.on('data', function (name) {
		send(name.replace('\n', ''));
	});

}
