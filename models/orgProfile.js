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
	organisation: {
		type: String,
		required: true
	},
	legalname: {
		type: String
	},
	contactperson: {
		type: String,
		required: true
	},
	telephone: {
		type: Number,
		required: true
	},
	location: {
		type: String
	},
	website: {
		type: String
	},
	address: {
		type: String
	},
	email: {
		type: String,
		required: true
	},
	description: {
		type: String,
		required: true,
		min: 40
	},
	avatar: {
		type: String
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
