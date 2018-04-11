var passport = require("passport");
var config = require("../config/database");
var mongoose = require("mongoose");
require("../config/passport")(passport);
var express = require("express");
var jwt = require("jsonwebtoken");
var router = express.Router();
var userSchema = require("../models/user");
var userService = require("../services/user.service");

//router.post('/signup', function(req, res) {
  //var JOI = require('joi');
  /* 
    if (!req.body.firstname || !req.body.lastname || !req.body.emailID || !req.body.password) {
      res.json({success: false, msg: 'Please enter all the details'});
    } else {
      var newUser = new User({
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        emailID: req.body.emailID,
        password: req.body.password
      });
      // save the user
      newUser.save(function(err) {
        if (err) {
          return res.json({success: false, msg: 'Account with the entered details already exists.'});
        }
        res.json({success: true, msg: 'Successful created new user.'});
      });
    }
  }); */

router.post("/signup", function(req, res) {
  var registerationData = {
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    emailID: req.body.emailID,
    password: req.body.password
  };
  console.log(data.password);
  
  userSchema.UserRegistration.create({

    USERS_ID: 006,
    FIRST_NAME: registerationData.firstname,
    LAST_NAME: registerationData.lastname,
    LOGONID: registerationData.emailID,
    LOGONPASSWORD: registerationData.password
  })
    .then(function(response) {
      if (response) {
        res.send("USER REGISTERD SUCCESSFULLY");
      }
    })

    .catch(function(err) {
      res.send("ERROR While Registration" + err);
    });
});

router.post('/signin', function(req, res){
  var loginData = {
    emailID: req.body.emailID,
    password: req.body.password
  }
userService.signin( loginData, res);

});

module.exports = router;



// router.post("/signin", function(req, res) {
//   User.findOne(
//     {
//       emailID: req.body.emailID
//     },
//     function(err, user) {
//       if (err) throw err;

//       if (!user) {
//         res
//           .status(401)
//           .send({
//             success: false,
//             msg: "Authentication failed. User not found."
//           });
//       } else {
//         // check if password matches
//         user.comparePassword(req.body.password, function(err, isMatch) {
//           if (isMatch && !err) {
//             // if user is found and password is right create a token
//             //console.log("before");
//             var token = jwt.sign({ data: user }, config.secret);
//             //console.log("after");
//             // return the information including token as JSON
//             res.json({ success: true, token: "JWT " + token });
//           } else {
//             res
//               .status(401)
//               .send({
//                 success: false,
//                 msg: "Authentication failed. Wrong password."
//               });
//           }
//         });
//       }
//     }
//   );
// });

// //function for parsing authorization token from request headers.
// getToken = function(headers) {
//   if (headers && headers.authorization) {
//     var parted = headers.authorization.split(" ");
//     if (parted.length === 2) {
//       return parted[1];
//     } else {
//       return null;
//     }
//   } else {
//     return null;
//   }
// };


