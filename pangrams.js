// pangrams.js
// Ryan Juve --- March 2014
//
// shows which letters of the alphabet a string is missing

var fs  = require("fs");
fs.readFileSync(process.argv[2]).toString().split('\n').forEach(function (line) {
	if (line !== "") {
		var alpha = 'abcdefghijklmnopqrstuvwxyz';
		line.split('').forEach(function(character){
			if (/^[a-zA-Z]+$/.test(character)) {
				LCcharacter = character.toLowerCase();
				alpha = alpha.replace(LCcharacter, '');
			}
		});
		if (alpha === "") {
			console.log('NULL');
		} else {
			console.log(alpha);
		}
	}
});