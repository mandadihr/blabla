// var mongoose = require('mongoose');
// var Schema = mongoose.Schema;
// var bcrypt = require('bcrypt-nodejs');



// UserSchema.pre('save', function (next) {
//     var user = this;
//     if (this.isModified('password') || this.isNew) {
//         bcrypt.genSalt(10, function (err, salt) {
//             if (err) {
//                 return next(err);
//             }
//             bcrypt.hash(user.password, salt, null, function (err, hash) {
//                 if (err) {
//                     return next(err);
//                 }
//                 user.password = hash;
//                 next();
//             });
//         });
//     } else {
//         return next();
//     }
// });

// UserSchema.methods.comparePassword = function (passw, cb) {
//     bcrypt.compare(passw, this.password, function (err, isMatch) {
//         if (err) {
//             return cb(err);
//         }
//         cb(null, isMatch);
//     });
// };

// module.exports = mongoose.model('User', UserSchema);
var Sequelize = require("sequelize");
var dbConnection = require("../db/db");
var UserRegistration = dbConnection.define(
  "userregistration",
  {
    USERS_ID: { type: Sequelize.BIGINT, autoIncrement: true, primaryKey: true },
    FIRST_NAME: Sequelize.STRING,
    LAST_NAME: Sequelize.STRING,
    USER_TYPE: Sequelize.STRING,
    ACCOUNT_STATUS: Sequelize.INTEGER,
    LOGONID: Sequelize.STRING,
    LOGONPASSWORD: Sequelize.STRING,
    PASSWORDEXPIRED: Sequelize.INTEGER,
    PASSWORDRETRIES: Sequelize.INTEGER,
    PASSWORDINVALID: Sequelize.DATE,
    TIMEOUT: Sequelize.BIGINT
  },
  {
    timestamps: false,
    freezeTableName: true, // Model tableName will be the same as the model name
    tableName: "userregistration"
  }
);

module.exports = {
  UserRegistration: UserRegistration
};
