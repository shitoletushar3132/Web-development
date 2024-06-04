const express = require("express");
const app = express();

// app.use((req, res) => {
//   console.log("hi, I am middleware");
//   res.send("middleware end");
// });

// app.use("/random", (req, res, next) => {
//   console.log("i am only for random");
//   next();
// });

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token == "giveaccess") {
    return next();
  }
  throw new Error("ACCESS DENIED!");
};

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/", (req, res) => {
  res.send("i am Root");
});

app.get("/random", (req, res) => {
  res.send("this is a random page");
});

app.listen(8080, () => {
  console.log("server listening on port 8080");
});

app.use((req, res) => {
  res.send("page not found");
});

// //logger
// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toString();
//   console.log(req.method, req.hostname, req.path, req.time);
//   next();
// });
