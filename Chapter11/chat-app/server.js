/**
 *  Module dependencies
 */


var express = require('express'),
	sio = require('socket.io');
/**
 *  Create app.
 */

var app = express(express.bodyParser(), express.static('public'));

/**
 *  Listen.
 */

app.listen(3000);

/**
 *  Now we attach socketio
 */


/**
 *  Launching socketIO
 */

var io = sio.listen(app);

io.sockets.on('connection', function (sockets) {
	console.log('Someone connected');
});







