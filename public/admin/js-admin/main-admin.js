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
    $('.bodegasform').css( "display", "none");
    $('#'+nombre).css( "display", "block");
}
function validarCampos(){
	if(document.getElementById("nombre")==null){
		alert("Introduce el campo nombre!");
	}else{
		if(document.getElementById("provincia")==null){
			alert("Introduce el campo provincia!");
		}else{
			if(document.getElementById("direccion")==null){
				alert("Introduce el campo direccion!");
			}else{
				if(document.getElementById("gmail")==null){
					alert("Introduce el campo email!");
				}else{
					if(document.getElementById("telf")==null){
						alert("Introduce el campo telefono!");
					}else{
						if(document.getElementById("infor")==null){
							alert("Introduce el campo informacion corta!");
						}else{
							if(document.getElementById("informacion")=null){
								alert("Introduce el campo informacion larga!");
							}else{
								if(document.getElementById("busqueda")=null){
									alert("Introduce el campo busqueda!");
								}else{
									if(document.getElementById("imagen")=null){
										alert("Introduce el campo imagen!");
									}
								}
							}
						}
					}
				}
			}
		}
	}
}
function validarNombre(){
	if(document.getElementById("nombre").value==""){
		alert("Introduce el campo nombre!");
	}else{
		alert("lleno");
	}
}
