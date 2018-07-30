const express = require('express');
const apiRouter = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load Validation
const validateorgProfileInput = require('../../validation/org-profile');

// Load devProfile model
const orgProfile = require('../../models/orgProfile');
// Load Client model
const Client = require('../../models/Client');

// @clients   GET api/org/test
// @desc      Tests organisation (clients') profile route
// @access    Public
apiRouter.get('/test', (req, res) => res.json({ msg: 'Organisation profile route ok!' }));

// @clients   GET api/org profile
// @desc      Get current organisation profile route
// @access    Private
apiRouter.get('/', passport.authenticate('jwt', { session: false }), (req, res, _next) => {
	const errors = {}; // Initialise errors object for use later

	orgProfile
		.findOne({ client: req.client.id })
		.populate('client', [ 'name', 'profilepix' ])
		.then((org) => {
			if (!org) {
				errors.noorgprofile = 'This client has no profile';
				return res.status(404).json(errors);
			}
			res.json(org);
		})
		.catch((err) => res.status(404).json(err));
});

// @clients   POST api/org profile
// @desc      Create or edit organisation profile route
// @access    Private
apiRouter.post('/', passport.authenticate('jwt', { session: false }), (req, res, _next) => {
	const { errors, isValid } = validateorgProfileInput(req.body);

	// Check Validation
	if (!isValid) {
		// Return any errors with status 400
		return res.status(400).json(errors);
	}

	// Get fields
	const orgFields = {}; // Put incoming data in object and set to empty object
	orgFields.client = req.client.id;
	if (req.body.clienthandle) orgFields.clienthandle = req.body.clienthandle;
	if (req.body.clientgroup) orgFields.clientgroup = req.body.clientgroup;
	if (req.body.organisationname) orgFields.organisationname = req.body.organisationname;
	if (req.body.contactperson) orgFields.contactperson = req.body.contactperson;
	if (req.body.contactnumber) orgFields.contactnumber = req.body.contactnumber;
	if (req.body.seek) orgFields.seek = req.body.seek;
	if (req.body.location) orgFields.location = req.body.location;
	if (req.body.website) orgFields.website = req.body.website;
	if (req.body.email) orgFields.email = req.body.email;
	if (req.body.description) orgFields.description = req.body.description;
	if (req.body.profilepix) orgFields.profilepix = req.body.profilepix;
	if (req.body.numberofemployees) orgFields.numberofemployees = req.body.numberofemployees;

	/*
	// Seeks - Data comes in as CSV, so split into array
	if (typeof req.body.seek !== 'undefined') {
		orgFields.seek = req.body.seek.split(',');
	}
	*/

	// Social - Social is its own object of fields, so first initialise
	orgFields.social = {};
	if (req.body.youtube) orgFields.social.youtube = req.body.youtube;
	if (req.body.twitter) orgFields.social.twitter = req.body.twitter;
	if (req.body.facebook) orgFields.social.facebook = req.body.facebook;
	if (req.body.linkedin) orgFields.social.linkedin = req.body.linkedin;
	if (req.body.instagram) orgFields.social.instagram = req.body.instagram;

	// Look for client
	orgProfile.findOne({ client: req.client.id }).then((org) => {
		if (org) {
			// Update
			orgProfile
				.findOneAndUpdate({ client: req.client.id }, { $set: orgFields }, { new: true })
				.then((org) => res.json(org));
		} else {
			// Create

			// Check if clienthandle exists
			orgProfile.findOne({ clienthandle: orgFields.clienthandle }).then((org) => {
				if (org) {
					errors.clienthandle = 'That clienthandle already exists';
					res.ststaus(400).json(errors);
				}

				// Save orgProfile
				new orgProfile(orgFields).save().then((org) => res.json(org));
			});
		}
	});
});

module.exports = apiRouter;
