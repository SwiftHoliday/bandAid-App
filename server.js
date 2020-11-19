// require the modules and initialize settings variables
const express = require('express');
const port = 3000;

const morgan = require('morgan');

// create express app
const app = express();

// configure server settings
require('./config/database');

app.set('view engine', 'ejs');

// mount middleware
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));

// mount routes


// tell application to listen
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});