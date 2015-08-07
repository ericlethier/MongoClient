var express = require('express');
var router = express.Router();

/* GET Root. */
router.get('/', function(req, res, next) {
	res.render('add', { title: 'Add Collection'});
});

/* GET Add Collection. */
router.get('/add', function(req, res, next) {
	res.render('add', { title: 'Add Collection'});
});

module.exports = router;
