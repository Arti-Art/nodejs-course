const express = require('express')

const app = express()

// app.use((req, res, next) => {
//   console.log(req.url)
//   console.log(req.method)
//   console.log('First middleware')
//   next()
// })

// app.use((req, res, next) => {
//   console.log(req.url)
//   console.log('Second middleware')
//   next()
// })

// app.use((req, res, next) => {
//   console.log(req.url)
//   console.log('Third middleware')
//   res.send(`<h1>Hello from Arti in Tenerife</h1><p>The url is ${req.url}, and the method is ${req.method}</p>`)
// })

app.use('/users', (req, res, next) => {
  console.log(req.url)
  res.send(`<h1>Users page</h1><p>The url is ${req.url}, and the method is ${req.method}</p>`)
})

app.use('/', (req, res, next) => {
  console.log(req.url)
  res.send(`<h1>Homepage</h1><p>The url is ${req.url}, and the method is ${req.method}</p>`)
})

app.listen(3000)