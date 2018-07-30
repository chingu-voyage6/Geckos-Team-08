const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const returnUrl = '/';

// Create Schema
const orgProfileSchema = new Schema({
	client: {
		type: Schema.Types.ObjectId,
		ref: 'clients'
	},
	clienthandle: {
		type: String,
		required: true,
		unique: true,
		max: 60
	},
	clientgroup: {
		type: String
		//	default: org
	},
	organisationname: {
		type: String,
		required: true
	},
	contactperson: {
		type: String,
		required: true
	},
	contactnumber: {
		type: Number,
		required: true
	},
	seek: {
		type: [ String ],
		required: true
	},
	location: {
		type: String,
		required: true
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
