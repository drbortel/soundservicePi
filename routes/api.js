var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;
var path = require('path');
var soundFiles = require('./sounds');


function playSound(fileName){
	console.log('Trying to play sound');
	var filePath = path.format({
		dir: "/home/sounder/soundService/sounds",
		base: fileName
	});
	console.log('File name: ' + filePath);
	exec('/usr/bin/killall omxplayer.bin; /usr/bin/play ' + filePath);

}

function stopSound() {
	exec('/usr/bin/killall omxplayer.bin');
}


/* GET home page. */
router.get('/sounds', function(req, res, next) {

	var buttonArray = soundFiles.getAll();
	res.json({"songs": buttonArray});

});

router.get('/sounds/:fileName', function(req, res, next) {
	try{
		var song = req.params.fileName;
		playSound(song);
		res.json({"buttonJson": song});
	}catch(err){
		console.log(err);
		res.json({"errorMessage":"Unable to play song"});
	}
	
	

});

router.get('/sounds/stop', function(req, res, next) {
	stopSound();
	res.json({"buttonJson": "STOP"});
})

module.exports = router;
