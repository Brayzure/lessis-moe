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

app.listen(80);
console.log("Ready!");