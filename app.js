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
var Contact = require('./models/contact.js');

// API Routes
app.use('/api', require('./routes/api'));

// Server
app.listen(port);
console.log('listening on port 8080');