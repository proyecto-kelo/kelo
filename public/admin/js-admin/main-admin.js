function redireccion(id){
	if(id=="box1"){
		window.location.href="anadir.html";
	}
	if(id=="box2"){
		window.location.href="eliminar.html";
	}
	if(id=="box3"){
		window.location.href="elegir.html";
	}
}
// Funcion para mostrar el formulario del viñedo que se va a modificar
function mostrarform(){
	var nombre=document.getElementById("nom").value
    $('.bodegasform').css({opacity:0});
    $('#'+nombre).css({opacity:1});
}
function ocultarform(nombre){
    $('.bodegasform').css({opacity:0});
    $('#'+nombre).css({opacity:0});
}