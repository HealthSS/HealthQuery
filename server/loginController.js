const db = require('./database.js');

const loginController = {};
const bcrypt = require('bcrypt');

loginController.checkLogin = function (req, res, next) {
  // query database for hashed password
  // const {user, password} = req.body
  const queryString = "SELECT password FROM admin WHERE username = 'admin'";
  db.query(queryString, (err, data) => {
    if (err) {
      return next({
        log: 'an error has occurred in checkLogin middleware',
        status: 404,
        error: { err },
      });
    }
    // pull password out of admin row
    const { password } = data.rows[0];
    // check that password matches hashed password and that username is admin
    const result = (bcrypt.compareSync(req.body.password, password)
      && req.body.user === 'admin');
    if (result === true) {
      res.locals.loginState = 'Admin';
      next();
    } else {
      res.locals.loginState = 'User';
      next();
    }
  });
};
module.exports = loginController;
