const express = require("express");
const app = express();
const path = require("path");
const myRoutes = require("./routes/routes");

// app.use(express.urlencoded({extended: false})); // we don't actually need it here??
app.use(express.static(path.join(__dirname, 'public')))
app.use('/', myRoutes);

app.use((req, res, next) => {
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000);
