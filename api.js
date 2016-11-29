/*
* ROUTING FOR API
*/

var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
	res.send('Reached API router.');
});

module.exports = router;