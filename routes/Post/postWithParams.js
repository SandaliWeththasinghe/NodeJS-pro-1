// Before ES6
// const express = require("express");
// const router = express.Router();

const {Router} = require("express");
const router = Router();

router.post("/se/:seNumber", (req,res) => {
  const seNum = req.params.seNumber;
  return res.json(seNum);
});

module.exports = router;