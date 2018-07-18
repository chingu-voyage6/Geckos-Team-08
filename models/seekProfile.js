const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Create Schema
const seekProfileSchema = new Schema({
	_id: new mongoose.Schema.Types.ObjectId(),
	jobdetails: {
		title: String,
		organisation: [
			{
				type: Schema.Types.ObjectId,
				ref: 'orgProfile'
			}
		],
		description: {
			title: String,
			required: 'Description of the job you seek is required please'
		},
		contactperson: [
			{
				name: String,
				telephone: Number,
				required: 'A contact name and number is required please'
			}
		]
	},
	experiencerequired: {
		type: [ String ],
		enum: [ 'senior', 'mid', 'junior' ]
	},
	joblocation: {
		type: String,
		enum: [ 'office', 'remote', 'any' ],
		required: 'Do you require the developer on site? Or could the job be done 													remotely?'
	},
	responsibilities: {
		type: String,
		enum: [ 'develope', 'maintain', 'extend', 'all of the above' ],
		required:
			'Do you need a new app developed? Or does the work you seek require only 									enhancements to and maintenance of an existing app?'
	},
	salaryoffer: {
		type: Boolean,
		required: 'Are you offering a salary?'
	},
	jobmode: {
		type: [ String ],
		enum: [ 'full-time', 'part-time' ],
		required: 'Do you expect the developer to do the job full-time or part-time?'
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
