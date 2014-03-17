var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		var array = line.split(' ');
		var flip = 1;
		var output = [];
		while (array.length) {
			if (flip === 1) {
				output.push(array.pop());
				flip = 0;
			} else {
				array.pop();
				flip = 1;
			}
		}
		console.log(output.join(' '));
	}
});