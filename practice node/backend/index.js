const express = require("express");
const cors = require("cors");

app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json("helo");
});

app.listen(8080, () => {
  console.log("running");
});
