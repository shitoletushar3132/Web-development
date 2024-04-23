const http = require("http");
const path = require("path");
const fs = require("fs");
const { json } = require("stream/consumers");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      {},
      (err, content) => {
        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(content);
      }
    );
  }

  if (req.url === "/api/users") {
    const users = [
        {name : 'Bob Smith',age:40},
        {name : 'John Doe',age:30},
    ];
    res.writeHead(200,{'Content-Type':'application/json'});
    res.end(JSON.stringify(users))
  }
});

const port = process.env.port || 5000;

server.listen(port, () => {
  console.log("server start on port: ", port);
});
