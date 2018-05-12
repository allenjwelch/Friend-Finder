var mailgun = require("mailgun-js");
const express = require("express");
var api_key = 'key-41756bca5acd51517e2d8ac172c1237e';
var DOMAIN = 'sandbox96f81889fe9c4da9a9367905532ee8f0.mailgun.org';
var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});
const path = require('path'); 

module.exports = function (app) {

  app.post('/send', function(req, res) {
    console.log(req.body.newFriend); 
    console.log(req.body[0]); 
    let sendTo; 
    let sentFrom; 

    var data = {
      from: 'Your new friend! <postmaster@sandbox96f81889fe9c4da9a9367905532ee8f0.mailgun.org>',
      to: 'bar@example.com',
      subject: 'Friend-Finder has just found you a friend!',
      html: `Hello, \nIt looks like you and our new user, ${req.body.name}, may just hit it off! \nIf you'd like to connect, drop them a note at: ${req.body.email}`
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




// app.get('/survey', function(req, res) {
//   res.json(friendsData); 
// }); 

// module.exports = function (app) {
//   app.get('/submit/:mail', function(req,res) {
//     let sendTo = req.params.mail; 
//     console.log(req); 
//     console.log(res)
//     //We pass the api_key and domain to the wrapper, or it won't be able to identify + send emails
//     var mailgun = new Mailgun({apiKey: api_key, domain: domain});

//     var data = {
//     //Specify email data
//       from: sentFrom,
//     //The email to contact
//       to: sendTo,
//     //Subject and text data  
//       subject: 'Friend-Finder has just found you a friend!',
//       html: `Hello, \nIt looks like you and our new user, ${req.name}, may just hit it off! \nIf you'd like to connect, drop them a note at: ${req.email}`
//     }

//     //Invokes the method to send emails given the above data with the helper library
//     mailgun.messages().send(data, function (err, body) {
//         //If there is an error, render the error page
//         if (err) {
//             res.render('error', { error : err});
//             console.log("got an error: ", err);
//         }
//         //Else we can greet    and leave
//         else {
//             //Here "submitted.jade" is the view file for this landing page 
//             //We pass the variable "email" from the url parameter in an object rendered by Jade
//             res.render('submitted', { email : req.params.mail });
//             console.log(body);
//         }
//     });

//   });
// }; // module.exports

// var mailgun = require("mailgun-js");
// var api_key = 'YOUR_API_KEY';
// var DOMAIN = 'YOUR_DOMAIN_NAME';
// var mailgun = require('mailgun-js')({apiKey: api_key, domain: DOMAIN});

// var data = {
//   from: 'Excited User <me@samples.mailgun.org>',
//   to: 'bar@example.com, YOU@YOUR_DOMAIN_NAME',
//   subject: 'Hello',
//   text: 'Testing some Mailgun awesomness!'
// };

// mailgun.messages().send(data, function (error, body) {
//   console.log(body);
// });




//////////////////

// app.get('/send', function(req, res) {
//   res.render('contact'); 
// });


