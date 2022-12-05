const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// PUG Templating Engine
// app.set("view engine", "pug"); // registering pug : it autoregisters

// EJS Templating Engine
app.set("view engine", "ejs");

app.set("views", "views"); // sets the views directory. Here, it's redundant because we're already using the convention of having a views folder. But if it was another folder, I need to specify it here.

const adminData = require("./routes/admin"); // has 2 exports: exports.routes, and exports.products
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminData.routes);
app.use(shopRoutes);

app.use((req, res, next) => {
  // res.status(404).sendFile(path.join(__dirname, "views", "404.html"));
  // we render a template with a special render method provided by Express.
  // that render method will always look for the registered view engine   
  res.status(404).render("404", { pageTitle: "Page not found" });
});

app.listen(3000);
