var fs  = require("fs");

var N,
	output = [];

var longestify = function(array, num) {
	var newOutput = {},
		finalOutput = [],
		countdown = array.length - num;

	array.forEach(function(el, ind) {
		newOutput[el.length] = el;
	})

	for (el in newOutput) {
		if (countdown < num) {
			finalOutput.unshift(newOutput[el]);
		}
		countdown--;
	}

	console.log(finalOutput.join('\n'));
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line, index) {
    if (line !== "") {
    	if (index === 0) {
    		N = parseInt(line);
    	} else {
    		output.push(line);
    	}        
    }
});

longestify(output, N);