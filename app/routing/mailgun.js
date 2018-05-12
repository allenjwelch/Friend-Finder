// require('dotenv').config();
var mailgun = require("mailgun-js");
const express = require("express");
var api_key = 'key-41756bca5acd51517e2d8ac172c1237e';
// var api_key = process.env.API_KEY;
var DOMAIN = 'sandbox96f81889fe9c4da9a9367905532ee8f0.mailgun.org';
// var DOMAIN = process.env.DOMAIN; 
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});
const path = require('path'); 

module.exports = function (app) {

  app.post('/send', function(req, res) {
    console.log(req.body); 
    
    let sendTo; 
    let sentFrom; 

    var data = {
      from: `Your new friend! <postmaster@sandbox96f81889fe9c4da9a9367905532ee8f0.mailgun.org>`,
      to: `${req.body.to} <${req.body.toEmail}>`,
      subject: 'Friend-Finder has just found you a friend!',
      html: `Hey ${req.body.to}!\nIt looks like you and our new user, ${req.body.newFriend}, may just hit it off! \nIf you'd like to connect, drop them a note at: ${req.body.newFriendEmail}\nThanks for using Friend-Finder!`
    };

    mailgun.messages().send(data, function (error, body) {
      console.log(body);
      if (!error) {
        console.log('Mail Sent!'); 
      } else {
        console.log('Mail not sent'); 
      }
    });

  }); 
}; 