const express = require("express");
const app = express();
const ExpressError = require("./expressError");

// const checkToken = (req, res, next) => {
//   let { token } = req.query;
//   if (token == "giveaccess") {
//     return next();
//   }
//   throw new ExpressErrorError(401, "ACCESS DENIED!");
// };

// app.get("/api", checkToken, (req, res) => {
//   res.send("data");
// });

// app.get("/", (req, res) => {
//   res.send("i am root");
// });

// app.get("/random", (req, res) => {
//   res.send("i am random");
// });

// app.get("/err", (req, res) => {
//   abc = fa;
// });

// app.use((err, req, res, next) => {
//   let { status = 500, message = "some eror occured" } = err;
//   res.status(status).send(message);
// });

app.get("/admin", (req, res) => {
  throw new ExpressError(403, "Access to admin is Forbidden");
});

app.use((err, req, res, next) => {
  let { status = 500, message = "some error" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("start at 8080");
});
