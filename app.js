const express = require('express');
const bodyParser = require('body-parser')
const app = express();
const cors = require('cors');
const router = require('./routes');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());

app.use(cors());

app.use('/', router);

const port = process.env.port || 3003;
app.listen(port, () => console.log(`started listening on port ${port}`));

module.exports = app;