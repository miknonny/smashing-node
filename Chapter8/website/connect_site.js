/**
 * module dependency
 */

var connect = require('connect');

/**
 *  create server.
 */
var server = connect.createServer();


server.use(connect.static(__dirname + '/website'));

/**
 * now we listen for incoming connection.
 */
server.listen(3000);