var fs  = require("fs");
var split, output, toRemove;

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		split = line.split(', ');

		output = split[0];
		toRemove = split[1];

		toRemove.split('').forEach(function(el){
			output = output.replace(new RegExp(el, 'g'), '');
		})

		console.log(output.trim().replace('  ',' '));
	}
});