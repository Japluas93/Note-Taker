const express = require("express");

const htmlRoutes = require("./routes/htmlroutes");

const apiRoutes = require("./routes/apiroutes");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

app.use(apiRoutes);

app.use(htmlRoutes);

app.listen(3000, function () {
  console.log("Server is running");
});
