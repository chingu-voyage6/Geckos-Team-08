const express = require('express');
const router = express.Router();

// @clients   GET api/clients/test
// @desc      Tests clients' route
// @access    Public
router.get('/test', (req, res) => res.json({ msg: 'Clients route ok!' }));

module.exports = router;
