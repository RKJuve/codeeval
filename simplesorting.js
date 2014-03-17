var fs  = require("fs");

var toFixed = Number.prototype.toFixed

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
    	var output = line.split(' ').map(parseFloat).sort(function(a,b){return a-b});
    	output.forEach(function(el, ind){
    		output[ind] = el.toFixed(3);
    	});
    	console.log(output.join(' '));
    }
});