/*
* ROUTING FOR MAIN SITE
*/

var express = require('express');
var path = require('path');
var router = express.Router();

var projects = [
	'utilibot',
	'site'
]

router.get('/', function(req, res) {
	res.render('pages/main');
});

router.get('/projects', function(req, res) {
	res.render('pages/projects');
});

router.get('/projects/:project', function(req, res) {
	let site = req.params.project.toLowerCase();
	if(~projects.indexOf(site)) {
		res.render(`pages/docs/${site}`);
	}
	else {
		res.sendStatus(404);
	}
});

module.exports = router;