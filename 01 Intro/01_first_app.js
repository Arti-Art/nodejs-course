const fs = require('fs')
let textContent = 'I am in Tenerife. Arti, 24/11/2022'
fs.writeFileSync('output/01_arti.txt', textContent)

// to run this code, type "node 01_first_app.js" in your terminal