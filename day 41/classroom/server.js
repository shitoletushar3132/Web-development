const express = require("express");
const app = express();
const users = require("./routes/user");
const post = require("./routes/post");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
  secret: "mySuperString",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  req.flash("success", "user registered successfully");
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  res.locals.msg = req.flash("success");
  res.render("page.ejs", { name: req.session.name });
});

// app.get("/test", (req, res) => {
//   res.send("test successful");
// });

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   }else{
//     req.session.count = 1;
//   }
//   res.send(`you sent a request ${req.session.count} times`);
// });

app.listen(3000, () => {
  console.log("Started on 3000 port");
});
