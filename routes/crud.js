const express = require("express");

const router = express.Router();

router.get("/:id", (req, res) => {
  res.send("유저 조회");
});

router.post("/", (req, res) => {
  res.send("신규 유저 생성");
});

module.exports = router;
