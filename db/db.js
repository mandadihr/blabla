var Sequelize = require('sequelize');
var configdata=require('../config/database.js');


var config={};

  config.name = configdata.database.database;
  config.host = configdata.database.host;
  config.username = configdata.database.user;
  config.password = configdata.database.password;
  config.dialect = configdata.database.dialect;
  

//Database Initialization using Sequalize (ORM)
var sequelizeClient = new Sequelize(config.name, config.username, config.password, {
  host: config.host,
  port: config.port,
  dialect: config.dialect,
    logging: false, 
  pool: {
    max: config.maxConnections,
    min: config.minConnections,
    idle: config.idle
  },
  operatorsAliases: false
});

sequelizeClient.authenticate()
  .then(function () {
    //logger.info("Database connection successful.");
    console.log("Database Connection Successful")
  })
  .catch(function (err) {
    //logger.error(errorUtil.buildErrorMessageDev(err));
    console.log("Error Connecting DB :" + err);
  })
  .done();

module.exports = sequelizeClient;
