var mongoose = require('mongoose');
var Schema = mongoose.Schema

// Contact Schema
var contactShcema = new Schema({
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