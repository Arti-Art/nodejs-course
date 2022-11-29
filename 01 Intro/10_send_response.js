const http = require('http')

const server = http.createServer((req, res) => {
  console.log(req.url, req.method)
  // console.log(req.headers)
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>My First Page</h1></body>')
  res.write('</html>')
  res.end() // we can't write after .end()
});

server.listen(3000)