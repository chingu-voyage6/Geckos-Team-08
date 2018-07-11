const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const seekProfileSchema = new Schema({
	client: {
		type: Schema.Types.ObjectId,
		ref: 'devProfiles'
	},
	clienthandleid: {
		type: String
	},
	jobtitle: {
		type: String
	},
	jobdescription: {
		type: String,
		required: true
	},
	experiencerequired: {
		type: [ String ],
		enum: [ 'senior', 'mid', 'junior' ]
	},
	joblocation: {
		type: String,
		enum: [ 'office', 'remote', 'any' ],
		required: true
	},
	responsibilities: {
		type: String,
		enum: [ 'develope', 'maintain', 'both' ]
	},
	salaryoffered: {
		type: Boolean,
		required: true
	},
	jobtype: {
		type: [ String ],
		enum: [ 'full-time', 'part-time' ],
		required: true
	},
	workhours: {
		type: [ String ]
	},
	dateposted: {
		type: Date,
		default: Date.now
	}
});

module.exports = seekProfile = mongoose.model('seekProfile', seekProfileSchema);
