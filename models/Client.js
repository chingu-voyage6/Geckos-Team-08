const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const ClientSchema = new Schema({
	name: {
		type: String,
		required: true,
		enum: [ 'dev', 'org' ]
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = Client = mongoose.model('clients', ClientSchema);
