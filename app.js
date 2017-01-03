// Dependencies 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Port
var port = process.env.PORT || 8080;

// Database 
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/database');

// Model
var Contact = require('./app/models/contact');

// Routes
var router = express.Router();

	// Middleware
	router.use(function(req, res, next){
		console.log('Running running ...');
		next();
	});

	// Test route
	router.get('/', function(req, res) {
		res.json({ message: 'Hello World'});
	});

app.use('/api', router)

// Server
app.listen(port);
console.log('listening on port 8080');