const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("i am user");
});

router.post("/", (req, res) => {
  res.send("i am user post");
});

router.get("/:id", (req, res) => {
  res.send(`i am user with id ${req.params.id}`);
});

module.exports = router;
