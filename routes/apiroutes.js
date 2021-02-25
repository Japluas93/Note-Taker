var router = require("express").Router();

router.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

//fs.readfile
router.get("/api/notes", function (req, res) {
  res.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
    if (err) {
      console.log("Error");
      return;
    }
    notes = JSON.parse(data);
  });
  res.json(notes);
});
//fs.writefile for post and delete methods
// json parse and stringify
// req.body
// req.params

module.exports = router;
