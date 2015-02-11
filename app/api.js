module.exports = function(app) {
/* API de la aplicacion*/
// Mostrar: nombre provincia telefono direccipon y gmail de todos los viñedos
// Devuelve un json en pantalla
app.get('/api', function(req, res) {
	db.query("SELECT nombre,provincia,telefono,direccion,gmail FROM  `vinedo`").success(function(rows){
	  res.json(rows);
	});
});
// Mostrar nombre y los tres vinos mas caracteristicos del viñedo en cuestion
// Devuelve un json en pantalla
app.get('/api/vino/:nom', function(req, res) {
  db.query("SELECT nombre,tinto,blanco,rosado FROM  `vinedo` WHERE nombre =  '"+req.params.nom+"'").success(function(rows){
    res.json(rows);
  });
});
// Mostrar el nombre del viñedo seleccionado junto con su informacion larga e informacion corta
// Devuelve un json en pantalla
app.get('/api/vinedo/:infor', function(req, res) {
  db.query("SELECT nombre,infor,informacion FROM  `vinedo` WHERE nombre =  '"+req.params.infor+"'").success(function(rows){
    res.json(rows);
  });
});
}