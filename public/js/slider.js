// Coger el id del elemndo que se ha checho click y cambiar la src de la otra imagen
function pasar(el_id){
	var src = document.getElementById(el_id).src;
	var id_grande = document.getElementById(el_id).className;
	document.getElementById("principal-"+id_grande).src=src;
}