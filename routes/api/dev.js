const express = require('express');
const apiRouter = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
const validatedevProfileInput = require('../../validation/dev-profile');
const validateExperienceInput = require('../../validation/experience');

// Load devProfile model
const devProfile = require('../../models/devProfile');
// Load Client model
const Client = require('../../models/Client');

// @clients   GET api/dev profile/test
// @desc      Tests developer (clients') profile route
// @access    Public
apiRouter.get('/test', (req, res) => res.json({ msg: 'Dev profile route ok!' }));

// @clients   GET api/dev profile
// @desc      Get current developer profile route
// @access    Private
apiRouter.get('/', passport.authenticate('jwt', { session: false }), (req, res, _next) => {
	const errors = {}; // Initialise errors object for use later

	devProfile
		.findOne({ client: req.client.id })
		.populate('client', [ 'name', 'avatar' ])
		.then((dev) => {
			if (!dev) {
				errors.nodevprofile = 'This client has no profile';
				return res.status(404).json(errors);
			}
			res.json(dev);
		})
		.catch((err) => res.status(404).json(err));
});

// @clients   POST api/dev profile
// @desc      Create or edit developer profile route
// @access    Private
apiRouter.post('/', passport.authenticate('jwt', { session: false }), (req, res, _next) => {
	const { errors, isValid } = validatedevProfileInput(req.body);

	// Check Validation
	if (!isValid) {
		// Return any errors with status 400
		return res.status(400).json(errors);
	}

	// Get fields
	const devFields = {}; // Put incoming data in object and set to empty object
	devFields.client = req.client.id;
	if (req.body.clienthandle) devFields.clienthandle = req.body.clienthandle;
	if (req.body.company) devFields.company = req.body.company;
	if (req.body.website) devFields.website = req.body.website;
	if (req.body.location) devFields.location = req.body.location;
	if (req.body.bio) devFields.bio = req.body.bio;
	if (req.body.status) devFields.status = req.body.status;
	if (req.body.githubusername) devFields.githubusername = req.body.githubusername;

	// Skills - Data comes in as CSV, so split into array
	if (typeof req.body.skills !== 'undefined') {
		devFields.skills = req.body.skills.split(',');
	}

	// Social - Social is its own object of fileds, so first initialise
	devFields.social = {};
	if (req.body.youtube) devFields.social.youtube = req.body.youtube;
	if (req.body.twitter) devFields.social.twitter = req.body.twitter;
	if (req.body.facebook) devFields.social.facebook = req.body.facebook;
	if (req.body.linkedin) devFields.social.linkedin = req.body.linkedin;
	if (req.body.instagram) devFields.social.instagram = req.body.instagram;

	// Look for client
	devProfile.findOne({ client: req.client.id }).then((dev) => {
		if (dev) {
			// Update
			devProfile
				.findOneAndUpdate({ client: req.client.id }, { $set: devFields }, { new: true })
				.then((dev) => res.json(dev));
		} else {
			// Create

			// Check if clienthandle exists
			devProfile.findOne({ clienthandle: devFields.clienthandle }).then((dev) => {
				if (dev) {
					errors.clienthandle = 'That clienthandle already exists';
					res.ststaus(400).json(errors);
				}

				// Save devProfile
				new devProfile(devFields).save().then((dev) => res.json(dev));
			});
		}
	});
});

// @clients   POST api/dev experience
// @desc      Add experience to developer profile route
// @access    Private
apiRouter.post('/experience', passport.authenticate('jwt', { session: false }), (req, res) => {
	const { errors, isValid } = validateExperienceInput(req.body);

	// Check Validation
	if (!isValid) {
		// Return any errors with status 400
		return res.status(400).json(errors);
	}

	devProfile.findOne({ client: req.client.id }).then((dev) => {
		const newExp = {
			title: req.body.title, // Return here to work on ENUM options
			company: req.body.company,
			location: req.body.location,
			from: req.body.from,
			to: req.body.to,
			current: req.body.current,
			description: req.body.description
		};

		// Add to experience array - unshift used instead of push so data
		dev.experience.unshift(newExp); // can be added at beginning

		// Save experience
		dev.save().then((dev) => res.json(dev));
	});
});

module.exports = apiRouter;
