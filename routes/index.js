// require the modules (express and controller)
const express = require('express');

const passport = require('passport');


// require index controller
const indexCtrl = require('../controllers/index');

// create router object
const router = express.Router();


// define routes
router.get('/', indexCtrl.index);

// google validates user credentials, and return user
router.get('/oauth2callback', passport.authenticate('google', {
    successRedirect: '/bands',
    failureRedirect: '/'
}));

router.get('/logout', function (req, res) {
    req.logOut();
    res.redirect('/');
});

router.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
}));

// export router object
module.exports = router;