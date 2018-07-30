const express = require('express');
const apiRouter = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Seek Model
const seekProfile = require('../../models/seekProfile');

// Load Client Profile
const Client = require('../../models/Client');

// Load Validation
const validateseekProfileInput = require('../../validation/seek-profile');

// @clients   GET api/seeks/test
// @desc      Tests seek route
// @access    Public
apiRouter.get('/test', (req, res) => res.json({ msg: 'Seek route ok!' }));

// @clients   POST api/seek/seek
// @desc      Create seek profile route
// @access    Private
apiRouter.post('/', passport.authenticate('jwt', { session: false }), (req, res, next) => {
	const { errors, isValid } = validateseekProfileInput(req.body);

	// Check Validation
	if (!isValid) {
		// If any errors, send 400 with any errors object
		return res.status(400).json(errors);
	}

	// New seek
	const newseekProfile = new seekProfile({
		seek_id: req.body.id,
		title: req.body.title,
		description: req.body.description,
		contactperson: req.body.contactperson,
		contactnumber: req.body.contactnumber,
		seeker: req.body.seeker,
		experiencerequired: req.body.experiencerequired,
		seeklocation: req.body.seeklocation,
		responsibilities: req.body.responsibilities,
		salaryoffer: req.body.salaryoffer,
		jobmode: req.body.jobmode,
		workhours: req.body.workhours
	});

	newseekProfile.save().then((seek) => res.json(seek));
});

module.exports = apiRouter;
