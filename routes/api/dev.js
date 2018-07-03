const express = require('express');
const router = express.Router();

// @clients   GET api/dev/test
// @desc      Tests developer (clients') profile route
// @access    Public
router.get('/test', (req, res) => res.json({ msg: 'Dev profile route ok!' }));

module.exports = router;
