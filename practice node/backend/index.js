const express = require("express");
const path = require("path");
const cors = require("cors");
const { render } = require("ejs");

app = express();
app.use(cors());

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home.ejs");
});

app.get("/arr", (req, res) => {
  res.send({
    link: "https://images.unsplash.com/photo-1429041966141-44d228a42775?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    title: "Bridge",
    data: "This is maharashtra mumbai bridge",
  });
});

app.listen(8080, () => {
  console.log("running");
});
