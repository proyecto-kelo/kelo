var express = require('express');
var mongoose = require('mongoose');
var app = express();
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

/* Accesible todas las carpetas */
app.use(express.static(__dirname + '/public'));

app.use(bodyParser.json());

/* Redireccionar a pagina principal */
app.get('/', function(req, res) {
	res.redirect('/index.html');
});

/* Conexión */
var port = process.env.PORT || process.env.OPENSHIFT_NODEJS_PORT || 8080 || 5000; 
var ip = process.env.IP || process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1";
app.listen(port,ip);
console.log('Servidor Express escuchando en el puerto 8080');