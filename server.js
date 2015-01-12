var express = require('express');
var mongoose = require('mongoose');
var app = express();
var cookieParser = require('cookie-parser');

// CONEXION BASE DE DATOS //
var sqlze = require('sequelize');
var mysql =  require('mysql');
//var db = new sqlze('kelo', 'adminPVADnlv', 'hIelxfWGujKy',{
var db = new sqlze('kelo', 'root', 'zubiri',{
dialect: 'mysql',
port: 3306
});
//
db
.authenticate()
.complete(function(err){
if(!!err) {
console.log('Unable to connect to database: ', err);
} else {
console.log('Connection OK!');
}
});



// body-parser for POST
// https://github.com/expressjs/body-parser
var bodyParser = require('body-parser');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());

/* Accesible todas las carpetas */
app.use(express.static(__dirname + '/public'));

/** ROUTES **/
/* Redireccionar a pagina principal */
app.get('/', function(req, res) {
	res.redirect('/index.html');
});

app.get('/navarra', function(req, res) {
	db.query("SELECT * FROM  `vinedo` WHERE provincia =  'Navarra'").success(function(rows){
	// no errors
	  console.log(rows);
	  res.json(rows);
	});
	db.query("SELECT count(*) FROM  `vinedo` WHERE provincia =  'Navarra'").success(function(rows){
	// no errors
	  console.log(rows);
	  res.json(rows);
	});
});
app.get('/rioja', function(req, res) {
	db.query("SELECT * FROM  `vinedo` WHERE provincia =  'La Rioja'").success(function(rows){
	// no errors
	  console.log(rows);
	  res.json(rows);
	});
	db.query("SELECT count(*) FROM  `vinedo` WHERE provincia =  'La Rioja'").success(function(rows){
	// no errors
	  console.log(rows);
	  res.json(rows);
	});
});
app.get('/alava', function(req, res) {
	db.query("SELECT * FROM  `vinedo` WHERE provincia =  'Alava'").success(function(rows){
	// no errors
	  console.log(rows);
	  res.json(rows);
	});
	db.query("SELECT count(*) FROM  `vinedo` WHERE provincia =  'Alava'").success(function(rows){
	// no errors
	  console.log(rows);
	  res.json(rows);
	});
});
app.get('/buscar', function(req,res) {
	db.query("SELECT * FROM  `vinedo`").success(function(rows){
	// no errors
	  console.log(rows);
	  res.json(rows);
	});
});
/* Conexión */
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080 || 5000; 
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
app.listen(port,ip);
console.log('Servidor Express escuchando en el puerto 8080');