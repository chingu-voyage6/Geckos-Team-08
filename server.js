const express = require('express');
const mongoose = require('mongoose');
//const { MongoClient } = require('mongodb');
//const mongoURI = 'mongodb://localhost:27017';
const bodyParser = require('body-parser');
const passport = require('passport');

const clients = require('./routes/api/clients');
const org = require('./routes/api/org');
const dev = require('./routes/api/dev');
const seek = require('./routes/api/seek');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
// MongoClient
mongoose
	.connect(db, { useNewUrlParser: false })
	.then(() => console.log('MongoDB Connected'))
	.catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Use Routes
app.use('/api/clients', clients);
app.use('/api/seek', seek);
app.use('/api/org', org);
app.use('/api/dev', dev);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server on port ', port));
