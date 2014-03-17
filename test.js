var table = require('text-table');

var output = [];
var ref = [1,2,3,4,5,6,7,8,9,10,11,12];
var times = function(el, ind, array) {
    return (el * this);
};


for (i = 1; i<13; i++) {
    var temp = ref.map(times, i);
    output.push(temp);
}

var formattedOutput = table(output, {align: ['r','r','r','r','r','r','r','r','r','r','r','r']});

console.log(formattedOutput);