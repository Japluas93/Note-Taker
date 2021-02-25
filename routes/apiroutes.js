const apiRouter = require("express").Router();

apiRouter.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

apiRouter.get("/api/notes", function (req, res) {
  res.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
    if (err) {
      console.log("Error");
      return;
    }
    notes = JSON.parse(data);
  });
  res.json(notes);
});

apiRouter.post("/api/notes", function (req, res) {
  let note = {
    title: req.body.title,
    text: req.body.text,
  };
  notes.push(note);
  res.writeFile(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notes),
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      // notes.push({title:"my test", text:"my text"})
      res.send(notes);
    }
  );
});
// fs.readfile
//fs.writefile for post adnd delete methods
// json parse and stringify
// req.body
// req.params

module.exports = apiRouter;
