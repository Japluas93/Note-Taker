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
    console.log(data);
    var notes = [];
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
// This route receives a query parameter containing the id of a note to delete.
// Then the splice method removes the note data from the array in the db.json file
// The notes are then rewritten to the `db.json` file.
Router.delete("/api/notes/:id", function (req, res) {
  // note.id.length = 0;
  const noteId = req.params.id;
  const noteIndex = notes.findIndex(function (note) {
    return note.id === noteId;
  });
  notes.splice(noteIndex, 1);

  fs.writeFile(
    path.join(__dirname, "../db/db.json"),
    JSON.stringify(notes),
    (err) => {
      if (err) {
        console.error(err);
        return;
      }

      res.send(200);
    }
  );
});

// Router is exported
module.exports = Router;
