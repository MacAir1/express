const express = require("express");

const router = express.Router();

router.get("/:id", (req, res) => {
  res.send("특정 트윗 조회");
});

module.exports = router;
