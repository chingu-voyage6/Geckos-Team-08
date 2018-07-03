const express = require('express');
const router = express.Router();

// @clients   GET api/org/test
// @desc      Tests organisation (clients') profile route
// @access    Public
router.get('/test', (req, res) => res.json({ msg: 'Organisation profile route ok!' }));

module.exports = router;
