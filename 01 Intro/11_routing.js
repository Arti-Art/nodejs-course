// NB: This file's content might not make sense

const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
  const url = req.url
  const method = req.method
  if (url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>Enter Message</title></head>')
    res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>')
    res.write('</html>')
    return res.end() // we add a return here in order to return from this function and continue execution of the remaining code
  }
  if (url === '/message' && method === 'POST') {
    const requestBody = []
    req.on('data', (chunkOfData) => { // the data event will fire whenever a new chunk of data is ready to be read
      // console.log(chunkOfData)
      requestBody.push(chunkOfData)
    })
    return req.on('end', () => { // end will be fired when it's done parsing the request data
      const parsedBody = Buffer.concat(requestBody).toString()
      console.log(parsedBody)
      let message = parsedBody.split('=')[1]
      // fs.writeFileSync('output/11_routing.txt', message) // sync > will block furthercode execution, until this file is created, which means no extra request can come at the same time
      fs.writeFile('output/11_routing.txt', message, (err) => {
        res.statusCode = 302 // 302 is redirection
        res.setHeader('Location', '/')
        return res.end()
      })
    })
  }
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>My First Page</h1></body>')
  res.write('</html>')
  res.end() // we can't write after .end()
});

server.listen(3000)