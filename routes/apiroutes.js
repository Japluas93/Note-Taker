var router = require("express").Router();

router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//fs.readfile
//fs.writefile for post and delete methods
// json parse and stringify
// req.body
// req.params

module.exports = router;
