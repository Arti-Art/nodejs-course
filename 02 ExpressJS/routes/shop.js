const path = require('path') // core module from node that allows us to construct paths

const express = require('express')

const rootDir = require('../util/path')

const router = express.Router()

// NB: when using .get or .post, the router will do an EXACT match of the route, instead of applying it to all routes that start with '/' (as it was the case with .use)
router.get('/', (req, res, next) => {
  // res.send('<h1>Homepage. Hello from Arti in Tenerife.</h1>')
  // res.sendFile('/views/shop.html')
  // for sendFile, we need an absolute path
  // BUT simply starting with a slash will not work, as it will be the root folder of the server (or my localhost machine), not the root of my project in VSCode
  // res.sendFile(path.join(__dirname, '..', 'views', 'shop.html')) // we don't add slashes on views and shop because we use path.join(), which will automatically build paths that work on all systems (linux, windows etc)
  // __dirname is a global variable made available by nodeJS, which holds the absolute path on our computer to this project folder
  // __dirname gives us a path to the file in which we use it (here it would be ...../routes/), so we need to add an extra argument '..' to go up one level
  res.sendFile(path.join(rootDir, 'views', 'shop.html'))
})

module.exports = router