const jwt = require('jsonwebtoken');
const keys = require('./keys');

function verifyToken(req, res, next) {
	const token = token;
	if (!token) return res.status(403).send({ msg: 'No token found' });
	jwt.verify(token, keys.secretOrKey, function(err, decoded) {
		if (err) return res.status(500).send({ msg: 'Failed to Authorise Token' });

		// If everything is ok, save to use for request in other routes
		req.clientId = decoded.id;
		next();
	});
}

module.exports = verifyToken;
