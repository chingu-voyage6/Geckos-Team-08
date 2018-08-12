const express = require('express');
const apiRouter = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');

// Load Input Validation for registering client
const validateRegisterInput = require('../../validation/register');

// Load Input Validation for login of client
const validateLoginInput = require('../../validation/login');

// Load Client model
const Client = require('../../models/Client');

// @clients   GET api/clients/test
// @desc      Tests clients' route
// @access    Public
apiRouter.get('/test', (req, res) => res.json({ msg: 'Clients route ok!' }));

// @clients   POST api/clients/register
// @desc      Register client route
// @access    Public
apiRouter.post('/register', (req, res) => {
	const { errors, isValid } = validateRegisterInput(req.body);

	// Check Validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	Client.findOne({
		email: req.body.email
	}).then((client) => {
		if (client) {
			errors.email = 'Email already exists';
			return res.status(400).json(errors);
		} else {
			const avatar = gravatar.url(req.body.email, {
				s: '200', // Size
				r: 'pg', // Rating
				d: 'mm' // Default
			});

			const newClient = new Client({
				name: req.body.name,
				email: req.body.email,
				avatar,
				password: req.body.password
			});

			bcrypt.genSalt(10, (err, salt) => {
				bcrypt.hash(newClient.password, salt, (err, hash) => {
					if (err) throw err;
					newClient.password = hash;
					newClient.save().then((client) => res.json(client)).catch((err) => console.log(err));
				});
			});
		}
	});
});

// @clients   POST api/clients/login
// @desc      Log in client / Return JWT token route
// @access    Public
apiRouter.post('/login', (req, res) => {
	const { errors, isValid } = validateLoginInput(req.body);

	// Check Validation
	if (!isValid) {
		return res.status(400).json(errors);
	}

	const email = req.body.email;
	const password = req.body.password;

	// Find client by email
	Client.findOne({ email }).then((client) => {
		// Check for client
		if (!client) {
			errors.email = 'Client not found';
			return res.status(404).json(errors);
		}

		// Check password
		bcrypt.compare(password, client.password).then((isMatch) => {
			if (isMatch) {
				// Client matched; Create JWT payload
				const payload = { id: client.id, name: client.name, avatar: client.avatar };

				// Sign Token, 3600 = 1 minute in milliseconds
				jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
					res.json({
						success: true,
						token: 'Bearer ' + token
					});
				});
			} else {
				errors.password = 'Password incorrect';
				return res.status(400).json(errors);
			}
		});
	});
});

// @route     GET api/clients/current
// @desc      Return current client
// @access    Private
apiRouter.get('/current', passport.authenticate('jwt', { session: false }), (req, res) => {
	res.json({
		id: req.client.id,
		name: req.client.name,
		email: req.client.email
	});
});

module.exports = apiRouter;
