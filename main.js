/*
* ROUTING FOR MAIN SITE
*/

var express = require('express');
var path = require('path');
var meta = require('./src/resources/metadata.json');
var router = express.Router();

var projects = [
	'utilibot',
	'site'
]

router.get('/', function(req, res) {
	let m = meta.default;
	res.render('pages/main', m);
});

router.get('/projects', function(req, res) {
	let m = meta.projects;
	res.render('pages/projects', m);
});

router.get('/projects/:project', function(req, res) {
	let site = req.params.project.toLowerCase();
	let m = meta['projects-' + req.params.project] || meta.default;
	if(~projects.indexOf(site)) {
		res.render(`pages/docs/${site}`, m);
	}
	else {
		m = meta.default;
		m.url = "";
		res.render('pages/404', m);
	}
});

router.get('/sitemap', function(req, res) {
	res.sendFile('sitemap.txt', {root: path.join(__dirname, './src')});
});

router.get('*', function(req, res) {
	let m = meta.default;
	m.url = "";
	res.render('pages/404', m);
});

module.exports = router;