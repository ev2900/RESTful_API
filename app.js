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

// Routes
var router = express.Router();

	// Middleware (will log a message to the console when an API call is made)
	router.use(function(req, res, next){
		console.log('An API call was made');
		next();
	});

	// Test route
	router.get('/', function(req, res) {
		res.json({ message: 'Hello World'});
	});

	// GET, POST, PUT, DELETE
	router.route('/contacts')

		//POST
		.post(function(req, res){
			
			var contact = new Contact();
			contact.name = req.body.name;
			contact.email = req.body.email;

			contact.save(function(err) {
				if (err)
					res.send(err);
				res.json({message: 'Contact created'})
			});
		})

		//GET 
		//(all contacts)
		.get(function(req, res) {
			Contact.find(function(err, contacts){
				if (err)
					res.send(err);
				res.json(contacts);
			});
		});

	router.route('contacts/:contact_id')

		//GET
		//(single contact)
		.get(function(req, res) {
			Contact.findById(req.params.contact_id, function(err, bear) {
				if(err)
					res.send(err);
				res.json(contact);
			});
		});

app.use('/api', router)

// Server
app.listen(port);
console.log('listening on port 8080');