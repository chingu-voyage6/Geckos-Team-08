const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const clients = require('./routes/api/clients');
const dev_profile = require('./routes/api/dev_profile');

const app = express();

// Body parser middleware
app.use(
	bodyParser.urlencoded({
		extended: false
	})
);
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db).then(() => console.log('MongoDB Connected')).catch((err) => console.log(err));

// Passport middleware
app.use(passport.initialize());

// Passport config
require('./config/passport')(passport);

// Use Routes
app.use('/api/clients', clients);
app.use('/api/dev_profile', dev_profile);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server on port ', port));
