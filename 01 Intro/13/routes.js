const fs = require("fs");

// function requestHandler(req, res) {} // let's use ES6 instead
const requestHandler = (req, res) => {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Enter Message</title></head>");
    res.write(
      '<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></form></body>'
    );
    res.write("</html>");
    return res.end(); // we add a return here in order to return from this function and continue execution of the remaining code
  }
  if (url === "/message" && method === "POST") {
    const requestBody = [];
    req.on("data", (chunkOfData) => {
      // the data event will fire whenever a new chunk of data is ready to be read
      // console.log(chunkOfData)
      requestBody.push(chunkOfData);
    });
    return req.on("end", () => {
      // end will be fired when it's done parsing the request data
      const parsedBody = Buffer.concat(requestBody).toString();
      console.log(parsedBody);
      let message = parsedBody.split("=")[1];
      // fs.writeFileSync('output/11_routing.txt', message) // sync > will block furthercode execution, until this file is created, which means no extra request can come at the same time
      fs.writeFile("./message.txt", message, (err) => {
        res.statusCode = 302; // 302 is redirection
        res.setHeader("Location", "/");
        return res.end();
      });
    });
  }
  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>My First Page</h1></body>");
  res.write("</html>");
  res.end(); // we can't write after .end()
};

// module.exports = requestHandler;

// Multiple exports in one file
// module.exports = {
//   handler: requestHandler,
//   someText: 'some hardcoded text'
// };

// Then in the file where I need to import, do the following:
// const routes = require('./routes');
// console.log(routes.someText)

// Another way of exporting
module.exports.handler = requestHandler;
module.exports.someText = 'some real hardcoded text';
module.exports.justTesting = 'Hi it\'s Arti from Tenerife. 25/11/2022';

// Shortcut supported by nodeJs, not some JS magic
// exports.handler = requestHandler;
exports.someOtherText = 'some other hardcoded text';