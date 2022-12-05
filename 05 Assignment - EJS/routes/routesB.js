const express = require("express");
const router = express.Router();

let users = [{ name: "arti" }];

// /admin/users => GET
router.get("/users", (req, res, next) => {
  res.render("users", {
    pageTitle: "Add User",
    users: users,
  });
});

// /admin/users => POST
router.post("/users", (req, res, next) => {
  users.push({ name: req.body.user });
  res.redirect("/admin/users");
  console.log(users);
});

exports.routes = router;
exports.users = users;
