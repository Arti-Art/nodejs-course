const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
  // NB: when adding /routes/admin.js in our app.js file, we're filtering the routes by '/admin' >> don't forget to use this /admin in our form "action" attribute
  // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add product</button></form>')
  // res.sendFile(path.join(__dirname, '..', 'views', 'add-product.html'))
  res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})

// /admin/add-product => POST
router.post('/add-product', (req, res, next) => {
  console.log(req.body) 
  res.redirect('/')
})

module.exports = router