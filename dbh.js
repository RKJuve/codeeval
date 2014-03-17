var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
    if (line != "") {
        var temp = line.split(" ");
        var n = temp.pop();
        if (temp[temp.length-n]) {
        	console.log(temp[temp.length-n]);
        }
    }
});