const http = require('http');

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);
  if (req.url === '/') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Hello User! What\'s up?</h1><form action="/create-user" method="POST"><input type="text" name="user"><button type="submit">Create User</button></form></body>')
    res.write('</html>')
    return res.end()
  }
  if (req.url === '/create-user' & req.method === 'POST') {
    const requestBody = []
    req.on('data', (chunkOfData) => {
      requestBody.push(chunkOfData)
    })
    return req.on('end', () => {
      const parsedBody = Buffer.concat(requestBody).toString()
      console.log(parsedBody)
      res.setHeader('Location', '/')
      res.end()
    })
  }
  if (req.url === '/users') {
    res.setHeader('Content-Type', 'text/html')
    res.write('<html>')
    res.write('<head><title>My First Page</title></head>')
    res.write('<body><h1>Here\'s a list of users</h1><ul><li>Bobby</li><li>Martin</li><li>Jane</li></ul></body>')
    res.write('</html>')
    return res.end()
  }
  res.setHeader('Content-Type', 'text/html')
  res.write('<html>')
  res.write('<head><title>My First Page</title></head>')
  res.write('<body><h1>PAGE NOT FOUND</h1></body>')
  res.write('</html>')
  return res.end()
})

server.listen(3000);