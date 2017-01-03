// Dependencies 
var express = require('express');
var app = express();
var bodyParser = require('body-parser');

// Body Parser
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

// Port
var port = process.env.PORT || 8080;

// Routes
var router = express.Router();

	// Test route
	router.get('/', function(req, res) {
		res.json({ message: 'Hello World'});
	});

app.use('/api', router)

// Server
app.listen(port);
console.log('listening on port 8080');