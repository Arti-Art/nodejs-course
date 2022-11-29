const express = require('express')

const app = express()

// Adding a middleware that applies to all requests
app.use((req, res, next) => {
  console.log('This always runs')
  next()
})

// Routing
app.use('/add-product', (req, res, next) => {
  console.log('Adding a product')
  res.send('<h1>Add Product page</h1>')
  console.log(req.url)
})
// NB: with .use, the order is super important, as '/' will match anything that starts with a /, even /whatever
// !! If we use .get or .post, it will do an EXACT match of our route, so we don't need to worry as much about order with those
app.use('/', (req, res, next) => {
  console.log('In another middleware')
  res.send('<h1>Hello from Arti in Tenerife</h1>')
  console.log(req.url) // nb: if wondering why those codes run twice, it's because the browser is trying to fetch the favicon
})

app.listen(3000)