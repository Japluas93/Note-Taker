// Loads my express module
const express = require("express");
// Imports my htmlroutes file
const htmlRoutes = require("./routes/htmlroutes");
// Imports my apiroutes file
const apiRoutes = require("./routes/apiroutes");
// Creates my express application
const app = express();
// App registers a middleware function that parses JSON
app.use(express.json());
// App registers a middleware function that parses urlencoded bodies
app.use(express.urlencoded({ extended: true }));
// App registers a middleware function that serves images, CSS files, and JavaScript files in a directory named public
app.use(express.static("public"));
// App registers the required api route
app.use(apiRoutes);
// App registers the required html route
app.use(htmlRoutes);
// Variable that ensures that my web server is starting with a dynamic port.
var PORT = process.env.PORT || 3000;
// App listens on port 3000 for connections
app.listen(3000, function () {
  console.log("Server is running");
});
