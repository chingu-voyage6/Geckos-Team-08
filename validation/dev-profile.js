const Validator = require('validator');
const isEmpty = require('./is-empty');

module.exports = function validatedevProfileInput(data) {
	let errors = {};

	// Fields that are "required" from model
	data.clienthandle = !isEmpty(data.clienthandle) ? data.clienthandle : '';
	data.status = !isEmpty(data.status) ? data.status : '';
	data.skills = !isEmpty(data.skills) ? data.skills : '';

	// Ensure length of clienthandle is between 2 and 40
	if (!Validator.isLength(data.clienthandle, { min: 2, max: 40 })) {
		errors.clienthandle = 'Dev handle needs to be between 2 and 40 characters';
	}

	// Ensure clienthandle is entered
	if (Validator.isEmpty(data.clienthandle)) {
		errors.clienthandle = 'Developer handle is required';
	}

	// Ensure developer status is entered
	if (Validator.isEmpty(data.status)) {
		errors.status = 'Developer status info is required';
	}

	// Ensure developer skills info is entered
	if (Validator.isEmpty(data.skills)) {
		errors.skills = 'Developer skills info is required';
	}

	// Fields that are not required, format as URL's
	// But, only if a URL is entered, so first check to see
	// its not empty before validating, else we get URL error
	// even when UR is not entered. So...
	if (!isEmpty(data.website)) {
		if (!Validator.isURL(data.website)) {
			errors.website = 'Not a valid URL';
		}
	}

	// Do same as above for all "Socials"
	if (!isEmpty(data.youtube)) {
		if (!Validator.isURL(data.youtube)) {
			errors.youtube = 'Not a valid URL';
		}
	}

	if (!isEmpty(data.twitter)) {
		if (!Validator.isURL(data.twitter)) {
			errors.twitter = 'Not a valid URL';
		}
	}

	if (!isEmpty(data.facebook)) {
		if (!Validator.isURL(data.facebook)) {
			errors.facebook = 'Not a valid URL';
		}
	}

	if (!isEmpty(data.linkedin)) {
		if (!Validator.isURL(data.linkedin)) {
			errors.linkedin = 'Not a valid URL';
		}
	}

	if (!isEmpty(data.instagram)) {
		if (!Validator.isURL(data.instagram)) {
			errors.instagram = 'Not a valid URL';
		}
	}

	return {
		errors,
		isValid: isEmpty(errors)
	};
};
