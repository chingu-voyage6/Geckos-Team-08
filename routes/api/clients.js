const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys');
const passport = require('passport');
const verifyToken = require('../../config/verifyToken');

// Load Client model
const Client = require('../../models/Client');

// @clients   GET api/clients/test
// @desc      Tests clients' route
// @access    Public
router.get('/test', (req, res) => res.json({ msg: 'Clients route ok!' }));

// @clients   POST api/clients/register
// @desc      Register client route
// @access    Public
router.post('/register', (req, res) => {
	Client.findOne({
		email: req.body.email
	}).then((client) => {
		if (client) {
			return res.status(400).json({
				email: 'Email already exists'
			});
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
router.post('/login', (req, res, next) => {
	const email = req.body.email;
	const password = req.body.password;

	// Find client by email
	Client.findOne({ email }).then((client) => {
		// Check for client
		if (!client) {
			return res.status(404).json({ email: 'Client not found' });
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
					//req.clientId = decoded.id;
					next();
				});
			} else {
				return res.status(400).json({ password: 'Password incorrect' });
			}
		});
	});
});

// @route     GET api/clients/current
// @desc      Return current client
// @access    Private
router.get('/current', passport.authenticate('jwt', { session: false }), (req, res, next) => {
	res.json({ Status: 'hit any key to continue' });
});

module.exports = router;
