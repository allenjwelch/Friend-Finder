// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('imgs'));

require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app); 

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});