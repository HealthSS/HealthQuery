const express = require("express");
const path = require("path");
const app = express();
const port = 3000;
const coroniController = require("./coroniController");
const loginController = require("./loginController");

app.use(express.json());
// app.use(express.urlencoded());

app.get("/", (req, res) => {
  res.sendStatus(200);
});
app.post("/login", loginController.checkLogin, (req, res) => {
  const { isMatch } = res.locals;
  res.status(200).json({ isMatch });
});
app.get("/coroni", coroniController.getData, (req, res) => {
  res.status(200).json(res.locals.getData);
});

app.post("/updateCoroni", coroniController.reportData, (req, res) => {
  res.status(200).json("updated corona database");
});
app.post("/reportCoroni", coroniController.updateData, (req, res) => {
  res.status(200).json("updated coronis database");
});

app.use((err, req, res, next) => {
  const defaultErr = {
    log: "an express error occurred, this is a global error",
    status: 400,
    message: { err: "internal error has occurred" }
  };
  const newErr = Object.assign(defaultErr, err);
  res.status(newErr.status).json(newErr.message);
});

app.use("*", (req, res) => {
  res.sendStatus(404);
});

module.exports = app;
