/* Dependencias necesarias */
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cookieParser = require('cookie-parser');
var http = require('http');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
/* Handlebars */
var exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
/* Body parser*/
/* Para poder leer y escribir en el cuerpo del html */
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
/* Session */
/* Control de sesion del administrador */
var session = require('express-session');
app.use(session({ resave: true,
                  saveUninitialized: true,
                  secret: 'uwotm8' }));

/* Conexión del puerto e IP, para local y openshift */
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080 || 5000; 
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
app.listen(port,ip);
console.log('Servidor Express escuchando en el puerto 8080');

/* CONEXION BASE DE DATOS */
// Para openshift y local
var Sequelize = require('sequelize');
var mysql =  require('mysql');
var bd=null;
// var mysqlport = process.env.OPENSHIFT_MYSQL_DB_PORT || 3306; -- No borrar
if (process.env.OPENSHIFT_MYSQL_DB_URL) {  
console.log("openshift mysql db OK!");
     db = new Sequelize('kelo', process.env.OPENSHIFT_MYSQL_DB_USERNAME, process.env.OPENSHIFT_MYSQL_DB_PASSWORD,{
      dialect: 'mysql',
      port: process.env.OPENSHIFT_MYSQL_DB_PORT,
      host: process.env.OPENSHIFT_MYSQL_DB_HOST
    });
} else {
      console.log("local mysql bd OK!");
    db = new Sequelize('kelo', 'root', 'zubiri',{
      dialect: 'mysql',
      port: 3306
    });
}

/* Accesible todas las carpetas de public*/
app.use(express.static(__dirname + '/public'));

/* Modulado */
/* Rutas del codigo modulado */
require('./app/api')(app);
require('./app/routes')(app);