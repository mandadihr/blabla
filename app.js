var morgan = require('morgan');
//var mongoose = require('mongoose');
var passport = require('passport');
var bodyParser = require('body-parser');
var config = require('./config/database');
var express = require('express');
var mysql = require('mysql');
    app     = express();

//connection to db 
//mongoose.connect(config.database);
//mysql.createConnection(config.database);

//API route
var api = require('./routes/api');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//CORS enable
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.get('/', function(req, res) {
    res.send('Page under construction.');
  });
  
  app.use('/api', api);


  //passport initialization
  app.use(passport.initialize());

  app.listen(3000, () => {
      console.log('App listening on port 3000!');
  });