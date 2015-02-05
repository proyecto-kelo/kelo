var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cookieParser = require('cookie-parser');
var http = require('http');
var exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var mongoose = require('mongoose');
//
// CONEXION BASE DE DATOS //
var sqlze = require('sequelize');
var mysql =  require('mysql');

var mysqlport = process.env.OPENSHIFT_MYSQL_DB_PORT || 3306;

//var db = new sqlze('kelo', 'adminPVADnlv', 'hIelxfWGujKy',{
var db = new sqlze('kelo', 'root', 'zubiri',{
dialect: 'mysql',
port: mysqlport
});
//
db.authenticate().complete(function(err){
  if(!!err) {
    console.log('Unable to connect to database: ', err);
  } else {
    console.log('Connection mysql OK!');
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
app.get('/admin', function(req, res) {
  res.redirect('/log.html');
});

// Seleccion de la base de datos de los viñedos. Navarra, Rioja, Alava y todos.
app.get('/api', function(req, res) {
	db.query("SELECT nombre,provincia,telefono,direccion,gmail FROM  `vinedo`").success(function(rows){
	// no errors
	  res.json(rows);
	});
});
app.get('/api/vino/:nom', function(req, res) {
  db.query("SELECT nombre,tinto,blanco,rosado FROM  `vinedo` WHERE nombre =  '"+req.params.nom+"'").success(function(rows){
  // no errors
    res.json(rows);
  });
});
app.get('/api/vinedo/:infor', function(req, res) {
  db.query("SELECT nombre,infor,informacion FROM  `vinedo` WHERE nombre =  '"+req.params.infor+"'").success(function(rows){
  // no errors
    res.json(rows);
  });
});
app.get('/navarra', function(req, res) {
  db.query("SELECT * FROM  `vinedo` WHERE provincia =  'Navarra'").success(function(rows){
  // no errors
    res.json(rows);
  });
});
app.get('/rioja', function(req, res) {
	db.query("SELECT * FROM  `vinedo` WHERE provincia =  'La Rioja'").success(function(rows){
	// no errors
	  res.json(rows);
	});
});
app.get('/alava', function(req, res) {
	db.query("SELECT * FROM  `vinedo` WHERE provincia =  'Alava'").success(function(rows){
	// no errors
	  res.json(rows);
	});
});
app.get('/buscar', function(req,res) {
	db.query("SELECT * FROM  `vinedo`").success(function(rows){
	// no errors
	  res.json(rows);
	});
});
app.get('/elegir', function(req,res) {
  db.query("SELECT * FROM  `vinedo`").success(function(rows){
  // no errors
  //console.log("HOLAAAAAAAAAAAAAAA"+req.param.nombre);
    res.json(rows);
    //res.send({redirect: '/modificar.html'});
    
  });
});
/*
app.get('/log', function(req,res) {
	db.query("SELECT * FROM  `usuario`").success(function(rows){
	// no errors
	  res.json(rows);
	});
});
*/
app.post('/modificar', function(req, res) {
  if((req.body.nombre==undefined) || (req.body.provincia==undefined) || (req.body.direccion==undefined) || (req.body.gmail==undefined) || (req.body.telf==undefined) || (req.body.infor==undefined) || (req.body.informacion==undefined) || (req.body.busqueda==undefined) || (req.body.imagen==undefined)){
    console.log(req.body.nombre);
    console.log("Algun campo vacio!");
  }else{
    db.query("UPDATE vinedo SET nombre='"+req.body.nombre+"', provincia='"+req.body.provincia+"', direccion='"+req.body.direccion+"', gmail='"+req.body.gmail+"', telefono='"+req.body.telf+"', infor='"+req.body.infor+"', informacion='"+req.body.informacion+"', busqueda='"+req.body.busqueda+"', tinto='"+req.body.tinto+"', blanco='"+req.body.blanco+"', rosado='"+req.body.rosado+"', imagen='"+req.body.imagen+"' WHERE nombre='"+req.body.nombre+"'").success(function(rows){
      res.json(rows);
      console.log("Actualizado correctamente! :D");
      res.redirect("/admin/princi.html");
    });
  }
});
app.post('/buscar', function(req, res) {
  db.query("SELECT COUNT(nombre) FROM `vinedo` WHERE nombre='"+req.body.nom+"'").success(function(rows){
    if(rows==0){
      console.log("no existe el viñedo "+req.body.nom);
    }else{
      db.query("SELECT * FROM `vinedo` WHERE nombre='"+req.body.nom+"'").success(function(rows){
        res.json(rows);
      });
    }
  });
});
app.post('/eliminar', function(req, res) {
  if(req.body.nombre==""){
    console.log("Escribe algo!");
  }else{
    db.query("SELECT * FROM `vinedo` WHERE nombre='"+req.body.nombre+"'").success(function(rows){
      if(rows==""){
        console.log("No existe!");
      }else{
        db.query("DELETE FROM `vinedo` WHERE nombre='"+req.body.nombre+"'").success(function(rows){
          console.log("Eliminado correctamente!");
          res.redirect("/admin/princi.html");    
        });
      }
    });
  }
});
app.post('/anadir', function(req, res) {
  if((req.body.nombre==undefined) || (req.body.provincia==undefined) || (req.body.direccion==undefined) || (req.body.gmail==undefined) || (req.body.telf==undefined) || (req.body.infor==undefined) || (req.body.informacion==undefined) || (req.body.busqueda==undefined) || (req.body.imagen==undefined)){
    console.log("Algun campo vacio!");
  }else{
    db.query("SELECT * FROM `vinedo` WHERE nombre='"+req.body.nombre+"'").success(function(rows){
      if(rows!=""){
        console.log("Viñedo existente, prueba con otro nombre!");
      }else{
        db.query("INSERT INTO `vinedo` (nombre, provincia, direccion, gmail, telefono, infor, informacion, busqueda, tinto, blanco, rosado, imagen) VALUES ('"+req.body.nombre+"', '"+req.body.provincia+"', '"+req.body.direccion+"', '"+req.body.gmail+"', '"+req.body.telf+"', '"+req.body.infor+"', '"+req.body.informacion+"', '"+req.body.busqueda+"', '"+req.body.tinto+"', '"+req.body.blanco+"', '"+req.body.rosado+"', '"+req.body.imagen+"')").success(function(rows){
          console.log("Añadido correctamente!");
          res.redirect("/admin/princi.html");
        });
      }
    });
  }
});
app.post('/log', function(req, res){
  
});


/* Conexión */
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080 || 5000; 
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
app.listen(port,ip);
console.log('Servidor Express escuchando en el puerto 8080');
