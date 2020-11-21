const passport = require('passport');
const Band = require('../models/band');
const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_SECRET,
    callbackURL: process.env.GOOGLE_CALLBACK
}, function(accessToken, refreshToken, profile, cb) {
        
        Band.findOne({ googleId: profile.id }, function (err, band) {
            if (err) return cb(err);
            if (band) {
                return cb(null, band)
            } else {
                const newBand = new Band({
                    name: profile.displayName,
                    email: profile.emails[0].value,
                    googleId: profile.id
                });

                newBand.save(function (err) {
                    if (err) return cb(err);
                    return cb(null, band);
                });
            }
        });
}));


passport.serializeUser(function(band, done) {
    done(null, band);
});

passport.deserializeUser(function (id, done) {
    Band.findById(id, function (err, band) {
        done(err, band)
    });
});