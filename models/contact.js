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
	}
});

module.exports = mongoose.model('contact', contactShcema);