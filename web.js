/*
* EXTERNAL MODULES
*/
var express = require('express');
var ejs = require('ejs');
var ws = require('ws');

/*
* ROUTERS
*/
var api = require('./api.js');   // API routing
var main = require('./main.js'); // Everything else

var app = express();

app.use('/src', express.static(__dirname + '/src'));

app.set('view engine', 'ejs');

app.use('/api', api);
app.use('/', main);











app.get('/utilibot', function(req, res) {
	res.render('pages/docs/utilibot');
});

app.listen(8080);
console.log("Ready!");