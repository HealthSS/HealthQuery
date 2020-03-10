const coroniController = {};
const db = require('./database.js');

// middleware functionality to query database here
coroniController.getData = (req, res, next) => {
  const queryString = 'SELECT * FROM cases;';
  db.query(queryString, (err, response) => {
    if (err) {
      return next({
        log: 'an error has occurred in getData middleware',
        status: 404,
        error: { err },
      });
    }
    res.locals.getData = response.rows;
    return next();
  });
};

coroniController.updateData = (req, res, next) => {
  // send back keys of city, confirmed, death, recover, and active in request body to update;
  const {
    city, confirmed, death, recover, active,
  } = req.body;
  const queryArr = [city, confirmed, death, recover, active];
  const queryString = 'INSERT INTO cases(city, confirmed, deaths, recovered, active; VALUES($1, $2, $3, $4, $5);';
  db.query(queryString, queryArr, (err) => {
    if (err) {
      return next({
        log: 'an error has occurred in updateData',
        status: 404,
        error: { err },
      });
    }
    return next();
  });
};

module.exports = coroniController;
