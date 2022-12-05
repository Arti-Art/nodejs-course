const path = require("path");

const express = require("express");

const rootDir = require("../util/path");
const adminData = require("./admin"); // has exports.routes and exports.products

const router = express.Router();

router.get("/", (req, res, next) => {
  const products = adminData.products; // then I pass it to the templating engine as an object with a key
  res.render("shop", {prods: products, pageTitle: 'ArtiShop', path: "/"}); // will use the default templating engine to return that template
  // we also don't need to specify the path because we have defined "views" as our directory
});

module.exports = router;
