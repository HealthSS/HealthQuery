const coroniController = {};
const db = require("./database.js");
// const bcrypt = require("bcrypt");
// // middleware functionality to query database here
// bcrypt.hash("user", 15, function(err, hash) {
//   // Store hash in database
//   if (err) {
//     console.log("err");
//     return;
//   } else {
//     console.log("Address stored");
//     const queryString = "INSERT INTO admin(password, username) VALUES($1, $2)";
//     const queryArr = [hash, "user"];
//     db.query(queryString, queryArr, (err, response) => {
//       if (err) {
//         console.log("Err occurred");
//       }
//     });
//   }
// });
coroniController.getData = (req, res, next) => {
  const queryString = "SELECT * FROM cases;";
  db.query(queryString, (err, response) => {
    if (err) {
      return next({
        log: "an error has occurred in getData middleware",
        status: 404,
        error: { err }
      });
    }
    res.locals.getData = response.rows;
    return next();
  });
};

coroniController.reportData = (req, res, next) => {
  // send back keys of city, confirmed, death, recover, and active in request body to update;
  const { city } = req.body;
  const queryArr = [city, 1, 0, 0, 1];
  const queryString =
    "INSERT INTO cases(city, confirmed, deaths, recovered, active; VALUES($1, $2, $3, $4, $5);";
  db.query(queryString, queryArr, err => {
    if (err) {
      return next({
        log: "an error has occurred in updateData",
        status: 404,
        error: { err }
      });
    }
    return next();
  });
};
coroniController.updateData = (req, res, next) => {
  // send back keys of city, confirmed, death, recover, and active in request body to update;
  const { city, confirmed, death, recovered, active } = req.body;
  const queryArr = [city, confirmed, death, recovered, active];
  const queryString =
    "UPDATE cases SET confirmed = $2, deaths = $3, recovered = $4, active = $5 WHERE city = $1";
  db.query(queryString, queryArr, err => {
    if (err) {
      return next({
        log: "an error has occurred in updateData",
        status: 404,
        error: { err }
      });
    }
    return next();
  });
};

module.exports = coroniController;
