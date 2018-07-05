const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Load devProfile model
const devProfile = require('../../models/devProfile');
// Load Client model
const Client = require('../../models/Client');

// @clients   GET api/dev profile/test
// @desc      Tests developer (clients') profile route
// @access    Public
router.get('/test', (req, res) => res.json({ msg: 'Dev profile route ok!' }));

// @clients   GET api/dev profile
// @desc      Get current developer profile route
// @access    Private
router.get('/', passport.authenticate('jwt', { session: false }), (req, res, _next) => {
	const errors = {}; // Initialise errors object for use later

	devProfile
		.findOne({ client: req.client.id })
		.then((dev) => {
			if (!dev) {
				errors.nodevprofile = 'This client has no profile';
				return res.status(404).json(errors);
			}
			res.json(dev);
		})
		.catch((err) => res.status(404).json(err));
});

module.exports = router;
