// require the modules and initialize settings variables
const express = require('express');
const morgan = require('morgan');
const session = require('express-session');
const methodOverride = require('method-override');
const passport = require('passport');
const port = 3000;

// env vars
require('dotenv').config();

// create express app
const app = express();

// configure server settings
require('./config/database');
require('./config/passport');

// require routes
const indexRouter = require('./routes/index');
const bandsRouter = require('./routes/bands');
 const membersRouter = require('./routes/member')
// view engine setup
app.set('view engine', 'ejs');



// mount middleware
app.use(morgan('dev'));
app.use(express.static('public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true
}));

// Passport middleware
app.use(passport.initialize());
app.use(passport.session());


app.use(function(req, res, next) {
    res.locals.user = req.user
    next();
});



// mount routes
app.use('/', indexRouter);
app.use('/bands', bandsRouter);
 app.use('/', membersRouter)

// tell application to listen
app.listen(port, function() {
    console.log(`Express is listening on port:${port}`);
});