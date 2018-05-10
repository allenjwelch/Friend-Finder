const path = require('path'); 
// const express = require("express");
// var app = express();


module.exports = function (app) {

  // app.get("/", function(req, res) {
  //   res.sendFile(path.join(__dirname, "/../public/home.html"));
  // });

  app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/survey.html"));
  });
  
  app.use( function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });

  // app.use('/static', express.static(path.join(__dirname, 'public')))

}; // module.exports


