var express = require('express'),
	wsio = require('websocket.io');

/**
 *  Create express app.
 */

var app = express.createServer();

/**
 *  Attach the websocket server.
 */

var ws = wsio.attach(app);

/**
 *  Server your code.
 */

app.use(express.static('public'));

/**
 *  Listening for connections.
 */

ws.on('connection', function (socket) {
	socket.on('message', function (msg) {
		console.log('got %s', msg);
		socket.send('pong');
	});
});

/**
 *  Listen
 */

app.listen(3000);







