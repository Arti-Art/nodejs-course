const express = require('express')

const app = express()

app.use((req, res, next) => {
  console.log('In the middleware')
  next() // allows the req to continue to the next middleware
}) // this function will be executed for every incoming request
// next is a function that will be passed to the function where we use it, to allow the request to travel on to the next middleware

app.use((req, res, next) => {
  console.log('In another middleware')
  res.send('<h1>Hello from Arti in Tenerife</h1>') // allows us to send a response and attach a body
}) // without the next() in the previous app.use(), we would never get to this one


// const server = http.createServer(app);
// server.listen(3000);
// here is a simpler way of doing the above + no need to import http anymore:
app.listen(3000)