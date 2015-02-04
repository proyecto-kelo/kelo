var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cookieParser = require('cookie-parser');
var http = require('http');
//
var exphbs  = require('express-handlebars');
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');
//
// CONEXION BASE DE DATOS //
var sqlze = require('sequelize');
var mysql =  require('mysql');

//var db = new sqlze('kelo', 'adminPVADnlv', 'hIelxfWGujKy',{
var db = new sqlze('kelo', 'root', 'zubiri',{
dialect: 'mysql',
port: 3306
});
//
db.authenticate().complete(function(err){
  if(!!err) {
    console.log('Unable to connect to database: ', err);
  } else {
    console.log('Connection OK!');
  }
});

/*
var sys = require('sys');

var Client = require('mysql').Client;
var client = new Client ();

client.user = 'adminPVADnlv';
client.password = 'hIelxfWGujKy';

client.connect(function(error, results){
  if(error){
    console.log('Error: '+error.message);
    return;
  }
});*/

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
app.get('/log', function(req,res) {
	db.query("SELECT * FROM  `usuario`").success(function(rows){
	// no errors
	  res.json(rows);
	});
});

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
/*
IF EXISTS (SELECT * FROM Table1 WHERE Column1='SomeValue')
    UPDATE Table1 SET (...) WHERE Column1='SomeValue'
ELSE
    INSERT INTO Table1 VALUES (...)
*/
app.post('/eliminar', function(req, res) {
  if(req.body.nombre==""){
    console.log("Escribe algo!");
  }else{
    db.query("IF EXISTS (SELECT * FROM `vinedo` WHERE nombre='"+req.body.nombre+"') DELETE FROM `vinedo` WHERE nombre='"+req.body.nombre+"' ELSE print 'kk'").success(function(rows){
        console.log("Eliminado correctamente!");
        res.redirect("/admin/princi.html"); 
    });
    /*db.query("DELETE FROM `vinedo` WHERE nombre='"+req.body.nombre+"'").success(function(rows){
      console.log("Eliminado correctamente!");
      res.redirect("/admin/princi.html");    
    });*/
  }
});
app.post('/anadir', function(req, res) {
  if((req.body.nombre==undefined) || (req.body.provincia==undefined) || (req.body.direccion==undefined) || (req.body.gmail==undefined) || (req.body.telf==undefined) || (req.body.infor==undefined) || (req.body.informacion==undefined) || (req.body.busqueda==undefined) || (req.body.imagen==undefined)){
    console.log(req.body.nombre);
    console.log("Algun campo vacio!");
  }else{
  db.query("INSERT INTO `vinedo` (nombre, provincia, direccion, gmail, telefono, infor, informacion, busqueda, tinto, blanco, rosado, imagen) VALUES ('"+req.body.nombre+"', '"+req.body.provincia+"', '"+req.body.direccion+"', '"+req.body.email+"', '"+req.body.telefono+"', '"+req.body.infor+"', '"+req.body.informacion+"', '"+req.body.busqueda+"', '"+req.body.tinto+"', '"+req.body.blanco+"', '"+req.body.rosado+"', '"+req.body.imagen+"')").success(function(rows){
    console.log("Añadido correctamente!");
    console.log("server");
    res.redirect("/admin/princi.html");    
  });
}
});
/*  
INSERT INTO Customers (CustomerName, ContactName, Address, City, PostalCode, Country)
VALUES ('Cardinal','Tom B. Erichsen','Skagen 21','Stavanger','4006','Norway');
*/
/******************************************************************
// CONEXIÓN BASE DE DATOS
// var user=process.env.USER;
// var password=process.env.PASSWORD;
var mongoose = require('mongoose');
var user="aaltzi";
var password="zubiri";
mongoose.connect('mongodb://'+user+':'+password+'@ds031631.mongolab.com:31631/kelousuarios');
var db = mongoose.connection;
// comprobar conexión
db.on('error', console.error.bind(console, 'connection error: '));
db.once('open', function callback() {
	console.log('Conecction OK!!!');
});
// PASSPORT (control de sesiones)
var session = require('express-session');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var bcrypt = require('bcrypt-nodejs');

var Users = require('./usuario');

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
  done(null, user);
});
passport.use(new LocalStrategy(
  function(username, password, done) {

    // usuario local
    console.log(username);
    console.log(password);

    // Comparar el ususario introducido con el de la base de datos
    Users.find({ name: username}, function (err, users) {
      if (err) return console.error(err);
      
      // Comprobaciones por consola
      console.log('Find user:');
      console.log(users);
      console.log(users[0].password);
      console.log(users[0].name);
      // Recoger la contraseña en una variable
      var hash = users[0].password;
      // Comparar el usuario de la base de datos y el que se ha introducido
      console.log(users[0].id);

        if ((username == users[0].name) && (password==hash)) {
          // login Bien
          return done(null, username);
        } else {
          // login Mal
          // Comprobaciones
          console.log("resultados:");
          console.log("usuario local: "+username);
          console.log("usuario db: "+users[0].name);
          console.log("contraseña local: "+password);
          console.log("contraseña bd: "+users[0].password);
          return done(null, false);
        }
      
    });
  }
));
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({ secret: 'dasjdhuueneud8jndsuswhjndh',
                  saveUninitialized: true,
                  resave: true }));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// public files
app.use(express.static(__dirname + '/public'));


app.post('/login',
  passport.authenticate('local', { successRedirect: '/loginSuccess',
                                   failureRedirect: '/loginFailure',
                                   failureFlash: false })
);

app.get('/loginFailure', function(req,res) {
  res.send('Login KO. username/password incorrect');
});


app.get('/loginSuccess', ensureAuthenticated, function(req,res) {
  res.send('Login OK. Hello ' + req.user);
});

// Simple route middleware to ensure user is authenticated.
//   Use this route middleware on any resource that needs to be protected.  If
//   the request is authenticated (typically via a persistent login session),
//   the request will proceed.  Otherwise, the user will be redirected to the
//   login page.
function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}

app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

app.get('/otherpage', ensureAuthenticated, function(req, res){
  res.send('other page');
});
/***********************************************************************/

/* Conexión */
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080 || 5000; 
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
app.listen(port,ip);
console.log('Servidor Express escuchando en el puerto 8080');