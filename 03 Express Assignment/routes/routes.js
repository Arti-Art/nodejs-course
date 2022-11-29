const express = require("express");
const router = express.Router();
const path = require("path"); // constructs paths that work for all operating systems
const rootDir = require("../util/rootDir")

router.get("/", (req, res, next) => {
  // res.send('Hi from Arti')
  // res.sendFile(path.join(__dirname, "..", "views", "home.html"));
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

router.get("/users", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "users.html"));
});

module.exports = router