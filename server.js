var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cookieParser = require('cookie-parser');
var http = require('http');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//

/* Conexión */
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080 || 5000; 
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
app.listen(port,ip);
console.log('Servidor Express escuchando en el puerto 8080');

// CONEXION BASE DE DATOS //
var Sequelize = require('sequelize');
var mysql =  require('mysql');
var bd=null;

var mysqlport = process.env.OPENSHIFT_MYSQL_DB_PORT || 3306;

if (process.env.OPENSHIFT_MYSQL_DB_URL) {
  // the application is executed on Heroku ... use the postgres database
console.log("openshift mysql db OK!");
     db = new Sequelize('kelo', process.env.OPENSHIFT_MYSQL_DB_USERNAME, process.env.OPENSHIFT_MYSQL_DB_PASSWORD,{
      dialect: 'mysql',
      port: process.env.OPENSHIFT_MYSQL_DB_PORT,
      host: process.env.OPENSHIFT_MYSQL_DB_HOST
    });
} else {
    // the application is executed on the local machine ... use mysql
    // var db = new sqlze('databasename', 'username', 'password',{
      console.log("local mysql bd OK!");
    db = new Sequelize('kelo', 'root', 'zubiri',{
      dialect: 'mysql',
      port: 3306
    });
}


// body-parser for POST
// https://github.com/expressjs/body-parser
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

/* Accesible todas las carpetas */
app.use(express.static(__dirname + '/public'));

var session = require('express-session');
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }));


require('./routes')(app);