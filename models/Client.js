const mongoose = require('mongoose');
const Schema = mongoose.Schema;

/*
const returnUrl = '/';


// Validation
function validator(organisation) {
	if (organisation != false) {
		returnUrl = './dev/';
	}
	returnUrl = './org/';

	//	if (clientgroup !== 'org' || clientgroup !== 'dev') {
	//		throw new Error('clientgroup must either be org or dev');
	//	}
}


const clientgroupSchema = new Schema({
	org: String,
	dev: String
});

*/

// Create Schema
const ClientSchema = new Schema({
	/*
	clientgroup: {
		type: [ String ],
		enum: [ 'org', 'dev' ]
				// Validation
		required: function validator(clientgroup) {
			if (clientgroup !== 'org' || clientgroup !== 'dev') {
				throw new Error('clientgroup must either be org or dev');
			}

			if (clientgroup != 'org') {
				returnUrl = '/dev/';
			}
			returnUrl = '/org/';
		}

		//	default: 'org'
		//	validate: validator
		/*
				default: function(req, res) {
					if (this.org) {
						res.status(308).returnUrl('/org/');
					}
				}
	},
	*/

	name: {
		type: String,
		required: true
	},
	clientgroup: {
		type: [ String ],
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	/*
	clienthandle: {
		type: String,
		required: true,
		unique: true
	},
	*/
	password: {
		type: String,
		required: true
	},
	avatar: {
		type: String
	},
	profilepix: {
		type: Buffer
	},
	date: {
		type: Date,
		default: Date.now
	}
});

/*
ClientSchema.methods.canPlayRoleOf = function(clientgroup) {
	if (clientgroup == 'dev') {
		return true;
	}
	if (clientgroup == 'org') {
		return true;
	}
};

ClientSchema.methods.defaultReturnUrl = function() {
	const returnUrl = '/';
	if (this.canPlayRoleOf('dev')) {
		returnUrl = '/dev/';
	}

	if (this.canPlayRoleOf('org')) {
		returnUrl = '/dev';
	}
};

ClientSchema.path('clientgroup').validate({
	isAsync: true,
	validator: function(value, respond) {
		if (this.org) {
			res.status(308).redirect('/org/');
		}
		res.status(308).redirect('/dev/');
	}
});

ClientSchema.pre('validate', true, function(next, done) {
	next();
	returnUrl = (done, org);
}); */

module.exports = Client = mongoose.model('clients', ClientSchema);

/*
const client = new Client();
const error = Client.validateSync();
assert.ok(error.error['clientgroup']);

Client.schema.path('clientgroup').enumValues;
*/
