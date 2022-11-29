const http = require('http');

// PATHS
// a path starting with / is an absolute path
// a path starting with ./ is a relative path

const server = http.createServer((req, res) => {
  // console.log(req);
  console.log(req.url, req.method);
  // console.log(req.headers);
  process.exit(); // this code will run and exit only if there is a request, otherwise it will still be waiting
});
// The createServer function takes a request listener as an argument
// A Request listener is a function that will execute for every incoming request

server.listen(3000);