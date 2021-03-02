const Router = require("express").Router();
const path = require("path");
const fs = require("fs");
const { v4: uuidv4 } = require("uuid");
// This route reads the db.json file and returns all saved notes as JSON.
Router.get("/api/notes", function (req, res) {
  fs.readFile(path.join(__dirname, "../db/db.json"), "utf8", (err, data) => {
    if (err) {
      console.log("Error");
      return;
    }
    notes = JSON.parse(data);
    res.json(notes);
  });
});
// This route receives a new note to save on the request body
// Adds it to the `db.json` file
// Then returns the new note to the client.
Router.post("/api/notes", function (req, res) {
  let note = {
    title: req.body.title,
    text: req.body.text,
    id: uuidv4(),
  };
  notes.push(note);
  fs.writeFile(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notes),
    (err) => {
      if (err) {
        console.error(err);
        return;
      }
      // notes.push({title:"my test", text:"my text"})
      res.json(notes);
    }
  );
});
// fs.readfile
//fs.writefile for post adnd delete methods
// json parse and stringify
// req.body
// req.params

// Router is exported
module.exports = Router;
