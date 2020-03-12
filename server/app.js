const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
const cookieParser = require('cookie-parser');
const coroniController = require('./coroniController');
const authRoutes = require('./routes/auth');
// const { google } = require('googleapis');
// const jwt = require('jsonwebtoken');
// // Google's OAuth2 client
// const { OAuth2 } = google.auth;
// const CONFIG = require('../config');
const passportSetup = require('../config/passportSetup');

app.use(cookieParser());
// Setting up EJS Views
app.set('view engine', 'ejs');
// app.set('views', __dirname);

// google oAuth routes
app.use('/auth', authRoutes);

app.use(express.json());
// app.use(express.urlencoded());

// app.use((req, res) => res.sendFile(path.resolve(__dirname, '../index.html')));
app.get('/', (req, res) => {
  res.render('home');
});

// app.get('/', (req, res) => {
//   const oauth2Client = new OAuth2(CONFIG.oauth2Credentials.client_id, CONFIG.oauth2Credentials.client_secret, CONFIG.oauth2Credentials.redirect_uris[0]);
//   // Obtain the google login link to which we'll send our users to give us access
//   const loginLink = oauth2Client.generateAuthUrl({
//     access_type: 'offline', // Indicates that we need to be able to access data continously without the user constantly giving us consent
//     scope: CONFIG.oauth2Credentials.scopes, // Using the access scopes from our config file
//   });
//   return res.render('index', { loginLink });
// });


app.get('/coroni', coroniController.getData, (req, res) => {
  res.status(200).json(res.locals.getData);
});

app.post('/coroni', coroniController.updateData, (req, res) => {
  res.status(200).json('updated coronis database');
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'an express error occurred, this is a global error',
    status: 400,
    message: { err: 'internal error has occurred' },
  };
  const newErr = Object.assign(defaultErr, err);
  res.status(newErr.status).json(newErr.message);
});

app.use('*', (req, res) => {
  res.sendStatus(404);
});

module.exports = app;
