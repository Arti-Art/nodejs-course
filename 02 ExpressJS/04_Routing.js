const express = require('express')
const bodyParser = require('body-parser') // NB: actually, I could use the body parser that is already included in express: read https://medium.com/@mmajdanski/express-body-parser-and-why-may-not-need-it-335803cd048c#:~:text=This%20piece%20of%20middleware%20was,you%20to%20download%20another%20dependency.

const app = express()

app.use(bodyParser.urlencoded({extended: false}))


app.use('/add-product', (req, res, next) => {
  // console.log('Adding a product')
  res.send('<form action="/product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>')
  // console.log(req.url)
})

// app.get is like app.use, but it only works for GET requests
// idem for app.post. If I type /product in the address bar. I will get the Homepage content that is below with the path '/', because it's not a post request
app.post('/product', (req, res, next) => {
  console.log(req.body) 
  res.redirect('/')
})

app.use('/', (req, res, next) => {
  res.send('<h1>Hello from Arti in Tenerife</h1>')
  // console.log(req.url)
})

app.listen(3000)