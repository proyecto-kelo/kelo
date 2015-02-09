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

var exphbs  = require('express-handlebars');
// app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
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

app.get('/name/:name', function(req, res) {
  var name = req.params.name;
  req.session.name = name;
  // req.session.save();
  console.log(req.session.name);
    res.send('Hello ' + name);
});

/** ROUTES **/
/* Redireccionar a pagina principal */
app.get('/', function(req, res) {
	res.redirect('/index.html');
});
app.get('/admin', function(req, res) {
  res.redirect("/prueba");
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
    res.json(rows);    
  });
});
app.post('/log', function(req,res) {
  req.session.usuario=req.body;
	db.query("SELECT name,pass FROM  `usuario`").success(function(rows){
    if(req.body.name==rows[0].name){
      // Nombres coinciden
      if(req.body.password==rows[0].pass){
          console.log("La contraseña y el nombre coinciden");
          req.session.name = req.body.name;
          console.log("Nombre: "+req.session.name);
          //res.render('princi', {orders: rows});
          res.redirect('/admin');
      }else{
        console.log("La contraseña no coincide");
      }
    }else{
      console.log("El nombre no coincide");
    }
	// no errors
	  res.json(rows);
	});
});
app.get('/cerrarSesion', function(req, res){
  req.session.name = null;
  res.redirect("/");

});

app.post('/modificar', function(req, res) {
  if((req.body.nombre==undefined) || (req.body.provincia==undefined) || (req.body.direccion==undefined) || (req.body.gmail==undefined) || (req.body.telf==undefined) || (req.body.infor==undefined) || (req.body.informacion==undefined) || (req.body.busqueda==undefined) || (req.body.imagen==undefined)){
    console.log(req.body.nombre);
    console.log("Algun campo vacio!");
  }else{
    db.query("UPDATE vinedo SET nombre='"+req.body.nombre+"', provincia='"+req.body.provincia+"', direccion='"+req.body.direccion+"', gmail='"+req.body.gmail+"', telefono='"+req.body.telf+"', infor='"+req.body.infor+"', informacion='"+req.body.informacion+"', busqueda='"+req.body.busqueda+"', tinto='"+req.body.tinto+"', blanco='"+req.body.blanco+"', rosado='"+req.body.rosado+"', imagen='"+req.body.imagen+"' WHERE nombre='"+req.body.nombre+"'").success(function(rows){
      res.json(rows);
      console.log("Actualizado correctamente! :D");
      res.render("princi");
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
          res.render("princi");    
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
          res.render("princi");
        });
      }
    });
  }
});

app.get('/prueba', function(req,res) {
  var esta=false;
  console.log("Sesion: "+req.session.name);
  if(req.session.name == "admin"){
    res.render('princi');
    esta=true;
  }else{
    res.redirect('admin/log.html'); 
  }
  return esta;
});

