const http = require("http");
const path = require("path");
const fs = require("fs");
// const code = require(path.join(__dirname,"./public","script.js"))

const server = http.createServer((req,res) => {
  
    fs.appendFile(path.join(__dirname, "url.html"), `${req.url}\n`, (err) => {
        if(err) throw err;
    });
    res.end('saved your url data')
});

server.listen(5000, () => {
  console.log("server running");
});
