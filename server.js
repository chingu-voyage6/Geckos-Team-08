const express = require('express');

const app = express();

app.use('/api/clients', clients);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log('Server on port ', port));
