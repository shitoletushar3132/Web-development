const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("i am post");
});

router.post("/", (req, res) => {
  res.send("i am post post");
});

router.get("/:id", (req, res) => {
  res.send(`i am post with id ${req.params.id}`);
});

module.exports = router;
