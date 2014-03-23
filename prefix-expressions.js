var fs  = require("fs");

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
    	// init arrays & output
    	var numArray = [];
    	var opArray = [];
    	var output = 0;

    	//parse string
        line.split(' ').forEach(function(el) {
        	if (isNaN(el)) {
        		opArray.unshift(el);
        	} else {
        		numArray.push(parseInt(el));
        	}
        })

        //do math
        for (i=1; i < numArray.length; i++) {
        	if (i === 1) {
        		if (opArray[0] === '+') {
        			output = numArray[0] + numArray[1];
        		} else if (opArray[0] === '*') {
        			output = numArray[0] * numArray[1];
        		} else if (opArray[0] === '/') {
        			output = numArray[0] / numArray[1];
        		}
        	} else {
        		if (opArray[i-1] === '+') {
        			output += numArray[i];
        		} else if (opArray[i-1] === '*') {
        			output *= numArray[i];
        		} else if (opArray[i-1] === '/') {
        			output /= numArray[i];
        		}
        	}
        }

        console.log(output);
    }
});