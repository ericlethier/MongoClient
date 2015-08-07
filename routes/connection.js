var express = require('express');
var mongoose = require('mongoose');
var settings = require('../config/settings.js');
var router = express.Router();

/* GET Root. */
router.get('/', function(req, res, next) {
	res.render('add', { title: 'Add Connection'});
});

/* GET Add Connection. */
router.get('/add', function(req, res, next) {
	res.render('add', { title: 'Add Connection'});
});

/* GET Add Connection. */
router.post('/add', function(req, res, next) {
	var hostname = req.body.hostname;
	var port = req.body.port;
	var defaultdb = req.body.defaultdb;
	var username = req.body.username;
	var password = req.body.password;
	var authdb = req.body.authdb;
	var url = 'mongodb://' + hostname + ':' + port;
	if (username && password && authdb) {
		url = 'mongodb://' + username + ':' + password + '@' + hostname + ':' + port + '?authsource=' + authdb;
	}

	if (settings.DEBUG) {
		console.log('URL=>' + url);
	}

	var options = {'OPTIONS' : { server: { socketOptions: { keepAlive: 1 } } } };
	// Connect to mongodb
	mongoose.connect(url, options, function(err, db) {
  		if (err) {
			if (settings.DEBUG) {
	  			console.log('Couldn\'t connect to ' + hostname);
			}
			res.render('connection/add', { title: 'Add a connection', error: err });
		} else {
			if (settings.DEBUG) {
  				console.log('Connected correctly to server.');
			}
			var connection = mongoose.connection;
			connection.command( { collstats : 'test'}, function(err, result) {
				console.log('Result=> ' + result);
			} );

		 	res.render('connection/add', { title: 'Add a connection', success: 'Connected to ' + hostname + '.' });
		}
	});
});

module.exports = router;
