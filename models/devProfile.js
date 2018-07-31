const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const devProfileSchema = new Schema({
	client: {
		type: Schema.Types.ObjectId,
		ref: 'clients'
	},
	clienthandle: {
		type: String,
		required: true,
		unique: true,
		max: 40
	},
	clientgroup: {
		type: String
	},
	company: {
		type: String
	},
	website: {
		type: String
	},
	location: {
		type: String
	},
	bio: {
		type: String
	},
	status: {
		type: String,
		required: true
	},
	githubusername: {
		type: String
	},
	skills: {
		type: [ String ],
		required: true
	},
	experience: [
		{
			title: {
				type: String,
				// Is required but will be facilitated via pull down menu options
				enum: [ 'Senior', 'Mid', 'Junior', 'Student', 'Instructor' ]
			},
			company: {
				type: String,
				required: true
			},
			location: {
				type: String
			},
			from: {
				type: Date,
				required: true
			},
			to: {
				type: Date
			},
			current: {
				type: Boolean,
				default: false
			},
			description: {
				type: String
			}
		}
	],
	study: [
		{
			institution: {
				type: String,
				required: 'Where or how did you learn your skills?'
			},
			certification: {
				type: String,
				required: true
			},
			fieldofstudy: {
				type: String
			},
			from: {
				type: Date,
				required: true
			},
			to: {
				type: Date
			},
			current: {
				type: Boolean,
				default: false
			},
			description: {
				type: String
			}
		}
	],
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

module.exports = devProfile = mongoose.model('devProfile', devProfileSchema);
