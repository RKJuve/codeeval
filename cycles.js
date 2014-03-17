var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line != "") {
		var array = line.split(' ');

		for (i=0; i<array.length; i++) {
			if (array[i] === array[i+1]) {
				console.log(array[i])
				break;
			}
		}


		lam = array.length;
		while (lam > 0) {

			for (i=1; i<array.length; i++) {
				if (array[i] === array[i * lam]) {
					// console.log(array.slice(i,(i+lam)).join(' '));
					
					if (array.slice(i,(i+lam)) === array.slice((i * lam),(i * lam + lam))) {
						console.log(array.slice(i,(i+lam)).join(' '));
						lam = 0;
					}
				}
			}

			lam--;
		}
	}
});