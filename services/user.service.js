var dbConnection = require("../db/db");
var registrationSchema = require("../models/user");


var signin = function(loginData, res) {
    //console.log(loginData);
   // console.log(res);
  registrationSchema.UserRegistration.findAll({
    where: {
      LOGONID: loginData.emailID,
      LOGONPASSWORD: loginData.password
    }
  }).then(function(response) {
      console.log(response);
    if (response.length) {
      res.send({
        Response: response,
        Info: "Login Successful"
      });
    } else {
      res.send({
        Info: "Login Failed"
      });
    }
  })
  .catch(function(err){
      console.log(err);
  })
};

module.exports = { signin: signin };
