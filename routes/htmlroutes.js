const htmlRouter = require("express").Router();
const path = require("path");
// This route returns the `notes.html` file.
htmlRouter.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/notes.html"));
});
// This route returns the `index.html` file
htmlRouter.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});
// htmlRouter is exported
module.exports = htmlRouter;
