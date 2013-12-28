/**
 * module dependecies here.
 */

var fs = require('fs');
//process is one of the few global variables in node.


fs.readdir(process.cwd(), function (err, files) {
	console.log('');
	if (!files.length) {
		return console.log('No files to show!')	
	}
	console.log('select which file or directory you want to see');

	function file (i) {
		var filename = files[i];
		fs.stat(__dirname +  '/' + filename, function (err, stat) {
			if (stat.isDirectory()) {
				console.log('     ' + i + '    ' + filename );
			} else {
				console.log('     ' + i +filename);
			}
			i++;
			
			if (i === files.length) {
				process.stdout.write('    Enter your choice: ')
				process.stdin.resume();
				process.stdin.setEncoding('utf-8');
			} else {
				file(i);
			}
		});
	}
	file(0);
});

//that is ok for now you do not have to write th.