var express = require('express');
var router = express.Router();
var fs = require('fs');
var path = require('path');
var soundFiles = require('./sounds');

/* GET home page. */
router.get('/', function(req, res, next) {

	var buttonArray = soundFiles.getAll();
	res.render("all_sounds", {buttonArray:buttonArray});

});

/* GET home page. */
router.get('/sounds', function(req, res, next) {

	var buttonArray = soundFiles.getAll();
	res.render("all_sounds", {buttonArray:buttonArray});

});

module.exports = router;
