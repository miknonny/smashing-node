/**
 *  Module dependencies
 */

var net = require('net');



// track connections no of users connected.
var count = 0,
	users = {};

/**
 *  Create server
 */

var server = net.createServer(function (conn) {
	console.log((count + 1) + ' Users present')
	
	conn.write(
	 '\n > welcome to \033[92mnode-chat\033[39m!'
	+ '\n >' + count + ' other people are connected at this time.'
	+ '\n > please write your name and press enter: '
	);
	count++;
	//when a user emitts the close event you subtract from count
	conn.on('close', function () {
		count--;
		console.log('user left:', count)
	});

	/**
	 * tcp data is transmitted in raw form as bytes in buffers.
	 * keeping track of data
	 * change encoding from buffer setEncoding() method.
	 */
	//nickname for the current connection.
	var nickname;
	
	conn.setEncoding('utf-8');
	conn.on('data', function (data) {
		console.log(data)
		//remove the enter character on the data.
		data = data.replace('\r\n', '');
		//first piece of data should be the nickname.
		if (!nickname) {
			if (users[data]) {
				conn.write('nickname already in use!, try again...' + '\n');
				return;
			} else {
				nickname = data;
				users[nickname] = conn;
				for (var i in users) {
					users[i].write(nickname + ' Joined the room' + '\n');
				}
			}
			
		} else {
			//otherwise you can consider this a chat message
			for (var i in users) {
				//to check so we do not send message to our self.
				if (i !== nickname) {
					users[i].write('nickname: ' + data + '\n');
				}
			}
		}
	});

	conn.on('close', function () {
		count--;
		//when someone disconnects you have to clear up the users array.
		delete users[nickname];
	})


});

/**
 * Listen.
 */

server.listen(3000, function () {
	console.log('server listening on 3000');
});;


