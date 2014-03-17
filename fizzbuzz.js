var fs  = require("fs");
var fizzbuzz = function(strArray) {
	var output = [];
	var A = parseInt(strArray[0]);
	var B = parseInt(strArray[1]);
	var N = parseInt(strArray[2]);

	for (i=1; i<(N+1); i++) {
		if ( i%A === 0 ) {
			if (i%B === 0) {
				output.push('FB');
				continue;
			} else {
				output.push('F');
				continue;
			}
		} else if (i%B === 0) {
			output.push('B');
			continue;
		} else {
			output.push(i.toString());
		}
	}

	console.log(output.join(' '));
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line !== "") {
        fizzbuzz(line.split(' '));
    }
});