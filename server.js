const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const clients = require('./routes/api/clients');
const dev = require('./routes/api/dev');
const org = require('./routes/api/org');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys').mongoURI;

// Connect to MongoDB
mongoose.connect(db).then(() => console.log('MongoDB Connected')).catch((err) => console.log(err));

app.get('/', (req, res) => res.send('Lets get going again!'));
app.use('/api/clients', clients);
app.use('/api/dev', dev);
app.use('/api/org', org);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server on port ', port));
