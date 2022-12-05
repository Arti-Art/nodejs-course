const path = require("path");
const express = require("express");
const router = express.Router();

const rootDir = require("../util/path");

const products = [];

// /admin/add-product => GET
router.get("/add-product", (req, res, next) => {
  // res.sendFile(path.join(rootDir, "views", "add-product.html"));
  // you can pass a payload object to the render method
  res.render("add-product", {
    pageTitle: "Add Product",
    path: "/admin/add-product",
  });
});

// /admin/add-product => POST
router.post("/add-product", (req, res, next) => {
  products.push({ title: req.body.title });
  // adding data to JS variables is problematic: all those values persist while the server is spinning.
  // they persist if I reload my browser, or if I use a totally different browser to connect to it.
  // those vars are stored in the node app! The data is shared across all requests and all users.
  res.redirect("/");
});

exports.routes = router;
exports.products = products;
