const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const orgProfileSchema = new Schema({
	client: {
		type: Schema.Types.ObjectId,
		ref: 'clients'
	},
	clienthandle: {
		type: String
	},
	legalname: {
		type: String
	},
	contactperson: {
		type: String,
		required: 'A contact person is required'
	},
	contactnumber: {
		type: Number,
		required: 'A contact number is required'
	},
	location: {
		type: String,
		required: 'Where are you based?'
	},
	website: {
		type: String
	},
	email: {
		type: String,
		required: 'A contact email is required'
	},
	description: {
		type: String,
		required: 'A brief description of your organisation is required',
		min: 40
	},
	profilepix: {
		type: Buffer
	},
	numberofemployees: {
		type: Number
	},
	seeks: {
		type: [ String ],
		required: true
	},
	social: {
		youtube: {
			type: String
		},
		twitter: {
			type: String
		},
		facebook: {
			type: String
		},
		linkedin: {
			type: String
		},
		instagram: {
			type: String
		}
	},
	date: {
		type: Date,
		default: Date.now
	}
});

module.exports = orgProfile = mongoose.model('orgProfile', orgProfileSchema);
