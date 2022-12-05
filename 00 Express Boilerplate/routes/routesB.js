const express = require("express");
const router = express.Router();

let users = [{ name: 'arti' }];

// /admin/users => GET
router.get("/users", (req, res, next) => {
  res.render("add-user", {
    pageTitle: "Add User",
  });
});

// /admin/users => POST
router.post("/users", (req, res, next) => {
  products.push({ name: req.body.user });
  res.redirect("/users"); // check if needs redirection
  alert("check if redirection needed or if updates on the fly");
  console.log(users);
});

exports.routes = router;
exports.users = users;
