var fs  = require("fs");

var row, col, charString, output = [];

// read file
fs.readFileSync(process.argv[2]).toString().split(';').forEach(function (line, index) {
    if (line != "") {
        if (index === 0) {
        	row = parseInt(line);
        } else if (index === 1) {
        	col = parseInt(line);
        } else {
        	charString = line;
        }
    }
});

// str to array
strArray = charString.split(' ');
var counter = 1;

//pattern magic
// first row
for (i=0; i<col; i++) {
	output.push(strArray[i]);
	counter++;
}
while (row>0) {
	for (i=1; i<row+1; i++) {
		output.push(strArray[(col * i - 1)])
	}
	row--;

	for (i=0; i<col; i++) {
		output.push(strArray[(counter + i)])
		counter++;
	}	
	col--;
}
