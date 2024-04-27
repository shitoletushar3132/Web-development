import http from "http";
import fs from "fs/promises";
import url from "url";
import path from "path";

const port = 3000;
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer(async (req, res) => {
  // res.write('hello');

  // res.setHeader('Content-Type','text/html');
  // res.statusCode = 404;

  // res.writeHead(500,{'COntent-Type':'application/json'})
  // res.end(JSON.stringify({msg:'server Error'}));

  // res.write('.env')

  //   console.log(req.url);
  //   console.log(req.method);

  try {
    if (req.method === "GET") {
      let filePath;
      if (req.url === "/") {
        filePath = path.join(__dirname, "public", "index.html");
      } else if (req.url == "/about") {
        filePath = path.join(__dirname, "public", "about.html");
      } else {
        throw new Error("not found");
      }
      const data = await fs.readFile(filePath);
      res.setHeader("Content-Type", "text/html");
      res.write(data);
      res.end();
    } else {
      throw new Error("Method not allowed");
    }
  } catch (err) {
    res.writeHead(500, { "Content-Type": "text/html" });
    res.end("Server error");
  }
});

server.listen(port, () => {
  console.log("server is running");
});
