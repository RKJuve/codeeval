var fs  = require("fs");

var Counter = function(){
}
Counter.prototype.size = function() {
    var size = 0, key;
    for (key in this) {
        if (this.hasOwnProperty(key)) size++;
    }
    return size;
}

fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		var array = [];

		line.split(', ').forEach(function(el, index) {
			array[index] = el.replace(/[()]/g,'').split(',')
		});
		// console.log(array);
		var counterObjX = new Counter();
		var counterObjY = new Counter();

		for (i=0; i<4; i++) {
			var X = parseInt(array[i][0]);
			var Y = parseInt(array[i][1]);

			if (!counterObjX[X]) {
				counterObjX[X] = 1
			} else {
				counterObjX[X]++;
			}

			if (!counterObjY[Y]) {
				counterObjY[Y] = 1
			} else {
				counterObjY[Y]++;
			}

		}
		if (counterObjX.size() === 2 && counterObjY.size() === 2) {
			console.log('true');
		} else {
			console.log('false');
		}
	}
});