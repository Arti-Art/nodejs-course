const express = require('express')
const bodyParser = require('body-parser') // NB: actually, I could use the body parser that is already included in express: read https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c#:~:text=This%20piece%20of%20middleware%20was,you%20to%20download%20another%20dependency.
const path = require('path')

const app = express()

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public'))) // allows us to serve files statically by directly accessing them using the path (without the /public or whatever we called our public folder)
// it will take any request trying to find some file (ex: main.css, or main.js), it will automatically forward it to the public folder (because that's the one we specified)
// NB: I can register several public folders if needed, and it will return the first match it found

// app.use(adminRoutes)
app.use('/admin', adminRoutes) // only routes starting with /admin will go into adminRoutes
app.use(shopRoutes)

app.use((req, res, next) => { // this is our 'catch all' route
  // res.status(404).send('<h1>Page not found</h1>') // with express I can chain methods like this
  res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(3000)