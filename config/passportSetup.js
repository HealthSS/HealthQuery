const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20');
const keys = require('./keys.js');

passport.use(new GoogleStrategy({
  // insert options for google strategy
  callbackURL: 'auth/google/redirect',
  clientID: keys.google.clientID,
  clientSecret: keys.google.clientSecret,
}, (accessToken, refreshToken, profile, done) => {
  // passport callback function
  console.log(profile);
  console.log('passport callback has fired');
}));
