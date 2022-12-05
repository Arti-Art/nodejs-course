const path = require("path");
const express = require("express");
const app = express();
const routesA = require("./routes/routesA");
const routesB = require("./routes/routesB");

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false })); //Parse URL-encoded bodies, no need for a separate body-parser package
app.use(express.static(path.join(__dirname, "public"))); // set public folder as main folder for serving static files

app.use(routesA);
app.use("/admin", routesB.routes);

// catch all route (404)
app.use((req, res, next) => {
  res.status(404).render("404", { pageTitle: "Page not found" });
});

app.listen(3000);
