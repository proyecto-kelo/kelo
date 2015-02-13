module.exports = function(app) {
/* Redirecciones */
app.get('/', function(req, res) {
	res.redirect('/index.html');
});
app.get('/admin', function(req, res) {
  res.redirect("/log");
});
// Seleccionar todos los viñedos de Navarra para enviarselos en un json al Ajax correspondiente
app.get('/navarra', function(req, res) {
  db.query("SELECT * FROM  `vinedo` WHERE provincia =  'Navarra'").success(function(rows){
    res.json(rows);
  });
});
// Seleccionar todos los viñedos de La Rioja para enviarselos en un json al Ajax correspondiente
app.get('/rioja', function(req, res) {
	db.query("SELECT * FROM  `vinedo` WHERE provincia =  'La Rioja'").success(function(rows){
	  res.json(rows);
	});
});
// Seleccionar todos los viñedos de Alava para enviarselos en un json al Ajax correspondiente
app.get('/alava', function(req, res) {
	db.query("SELECT * FROM  `vinedo` WHERE provincia =  'Alava'").success(function(rows){
	  res.json(rows);
	});
});
// Seleccionar todos los viñedos para enviarselos en un json al Ajax correspondiente (Buscador)
app.get('/buscar', function(req,res) {
	db.query("SELECT * FROM  `vinedo`").success(function(rows){
	  res.json(rows);
	});
});
// Seleccion de todos los viñedos para enviarselos en un json al Ajax correspondiente (Elegir-Admin)
app.get('/elegir', function(req,res) {
  db.query("SELECT * FROM  `vinedo`").success(function(rows){
    res.json(rows);    
  });
});
/* Modificar los campos del viñedo en cuestion */
// Se validan:
// Que los campos no esten vacios
// Que las provincias solo sean: Alava, La Rioja y Navarra.
// Que el email sea correcto
// Que se introduzca un telefono de 9 numeros (real).
app.post('/modificar', function(req, res) {
  if((req.body.nombre==undefined) || (req.body.provincia==undefined) || (req.body.direccion==undefined) || (req.body.gmail==undefined) || (req.body.telf==undefined) || (req.body.infor==undefined) || (req.body.informacion==undefined) || (req.body.busqueda==undefined) || (req.body.imagen==undefined)){
    console.log(req.body.nombre);
    console.log("Algun campo vacio!");
  }else{
    var princi=0;
    if(req.body.provincia==("Alava")){
      princi++;
    }
    if(req.body.provincia==("La Rioja")){
      princi++;
    }
    if(req.body.provincia==("Navarra")){
      princi++;
    }
    if(princi!=1){
      console.log("Las provincias solo pueden ser : Alava, La Rioja y Navarra");
    }else{
      if(validarEmail(req.body.gmail)==true){
        if( !(/^\d{9}$/.test(req.body.telf)) ) {
          console.log("Introduce un telefono real!");
        }else{
          db.query("UPDATE vinedo SET nombre='"+req.body.nombre+"', provincia='"+req.body.provincia+"', direccion='"+req.body.direccion+"', gmail='"+req.body.gmail+"', telefono='"+req.body.telf+"', infor='"+req.body.infor+"', informacion='"+req.body.informacion+"', busqueda='"+req.body.busqueda+"', tinto='"+req.body.tinto+"', blanco='"+req.body.blanco+"', rosado='"+req.body.rosado+"', imagen='"+req.body.imagen+"' WHERE nombre='"+req.body.nombre+"'").success(function(rows){
          console.log("Actualizado correctamente! :D");
          res.render("princi");
          });
        }
      }else{
        console.log("Introduce un e-mail real");
      }   
    }
  }
});
/* Buscar el viñedo en la bd */
// En caso de que exista, devolver todos sus valores en un json
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
/* Eliminar Viñedo */
// Eliminar viñedo de la bd
// Validar que se haya escrito algo y que exista
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
/* Añadir un viñedo */
// Se validan:
// Que los campos no esten vacios
// Que las provincias solo sean: Alava, La Rioja y Navarra.
// Que el email sea correcto
// Que se introduzca un telefono de 9 numeros (real).
app.post('/anadir', function(req, res) {
  if((req.body.nombre=="") || (req.body.direccion=="") || (req.body.infor=="") || (req.body.informacion=="") || (req.body.busqueda=="") || (req.body.imagen=="")){
    console.log("Algun campo vacio!");
  }else{
    var princi=0;
    if(req.body.provincia==("Alava")){
      princi++;
    }
    if(req.body.provincia==("La Rioja")){
      princi++;
    }
    if(req.body.provincia==("Navarra")){
      princi++;
    }
    if(princi!=1){
      console.log("Las provincias solo pueden ser : Alava, La Rioja y Navarra");
    }else{
      if(validarEmail(req.body.gmail)==true){
        if( !(/^\d{9}$/.test(req.body.telf)) ) {
          console.log("Introduce un telefono real!");
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
      }else{
        console.log("Introduce un e-mail real");
      }   
    }
  }
});
/* Log */
// Validar que el usuario introducido y que el de la bd sean iguales
// Si son iguales redireccionar a la administracion, sino no
app.post('/log', function(req,res) {
  db.query("SELECT name,pass FROM  `usuario`").success(function(rows){
  if(req.body.name==rows[0].name){
    // Nombres coinciden
    if(req.body.password==rows[0].pass){
      console.log("La contraseña y el nombre coinciden");
      req.session.name = req.body.name;
      console.log("Nombre: "+req.session.name);
      res.render('princi');
    }else{
      console.log("La contraseña no coincide");
    }
  }else{
    console.log("El nombre no coincide");
  }
  });
});
/* Comprobar si la sesion esta abierta */
// Si la sesion esta abierta se redirecciona a la pagina principal de administracion
// Sino a logeartede nuevo
app.get('/log', function(req,res) {
  var esta = validarSesion(req);
  if(esta){
    res.render("princi");
  }else{
    res.redirect("/admin/log.html");
  }
});
/* Cerrar la sesion abierta */
app.get('/cerrarSesion', function(req, res){
  req.session.name = null;
  res.redirect("/");
});

/* Funciones para¡ validar campos */
// Sesion existente
function validarSesion(req){
  var esta=false;
  var kk=req.session.name;
  if(req.session.name == "admin"){
    esta=true;
  }
  return esta;
};
// Validacion e-mail
function validarEmail(mail){  
  if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
    // E-mail correcto
    return true;
  }else{ 
      return false;
  }
}

/* Usar la API de OpenWeatherMap */ 
app.get('/tiempo', function (req, res) {
  // Donostia. Zubiri-Manteo
  var lat  = 42.295872;
  var longi = -1.8187178;
  var url = 'http://api.openweathermap.org/data/2.5/weather?lat='+lat+'&lon='+longi+'';
  /* Devuelve un json con varios datos del tiempo */
  var request = require('request');
  request({url:url, json:"true"}, function (error, response, body) {
    if (!error && response.statusCode == 200) {
      console.log(body);
      res.json(body);
    } else {
      res.json({error:"request error"});
    }
  });
});


}


