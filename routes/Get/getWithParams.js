const {Router} = require("express");
const router = Router();

router.get("/se/:seNumber", (req, res) => {
  const seNum = req.params.seNumber;
  return res.json(seNum);
});

module.exports = router;

