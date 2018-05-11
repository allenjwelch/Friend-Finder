// Dependencies
// =============================================================
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

// const $ = require('jquery'); 

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static('imgs'));
// app.use('/public', express["static"](path.join(__dirname, 'images')));
// app.use('/app', express.static(path.join(__dirname, 'public'))) 
// app.use('/static', express.static(path.join(__dirname + 'public')));
// app.use(express.static(path.resolve('./public')));
// app.use('/public', express.static(path.resolve('./public'))); //<--new line added

require('./app/routing/apiRoutes.js')(app); 
require('./app/routing/htmlRoutes.js')(app); 

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});