var	fs = require('fs');

exports.getAll = function() {
  	
	var buttonArray = [];
	var files = fs.readdirSync('./sounds/');

        buttonArray.push({ "name":"STOP" });

	   if (filename.indexOf('.mp3') > 0 || filename.indexOf('.wav') > 0) {
		buttonArray.push({ "name":filename });
		}
           });

	return buttonArray;
};