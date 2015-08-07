var express = require('express');
var router = express.Router();

/* GET Root. */
router.get('/', function(req, res, next) {
	res.render('add', { title: 'Add Database'});
});

/* GET Add Database. */
router.get('/add', function(req, res, next) {
	res.render('add', { title: 'Add Database'});
});

module.exports = router;
