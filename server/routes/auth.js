const express = require('express');

const router = express.Router();
const passport = require('passport');

// this is the auth login
router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/logout', (req, res) => {
  // handle with passport
  res.send('logging out');
});

// auth with google
router.get('/google', (req, res, next) => {
  console.log('hoidyGOOGLESTUFF');
  return next();
},
passport.authenticate('google', {
  scope: ['profile'],
}));


// callback route for google to redirect to
router.get('/google/redirect', (req, res) => {
  res.send('hoidy this is google redirect');
});

module.exports = router;
