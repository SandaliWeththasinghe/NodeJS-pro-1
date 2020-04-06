const {Router} = require("express");
const router = Router();

router.delete("/se/:seNumber", (req,res) => {
  const seNum = req.params.seNumber;
  return res.json(seNum);
});

module.exports = router;