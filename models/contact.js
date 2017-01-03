var mongoose = require('mongoose');

// Contact Schema
var contactShcema = mongoose.Schema({
	name: {
		type: String,
		require: true
	},
	email: {
		type: String,
		require: true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

module.exports = mongoose.model('contact', contactShcema);