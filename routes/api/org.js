const express = require('express');
const apiRouter = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// @clients   GET api/org/test
// @desc      Tests organisation (clients') profile route
// @access    Public
apiRouter.get('/test', (req, res) => res.json({ msg: 'Organisation profile route ok!' }));

module.exports = apiRouter;
