module.exports = function(app) {
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
}