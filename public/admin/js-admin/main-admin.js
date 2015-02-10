function redireccion(id){
	if(id=="box1"){
		$("body").html(anadir);
	}
	if(id=="box2"){
		$("body").html(eliminar);
	}
	if(id=="box3"){
		$("body").html(elegir);
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
			if(document.getElementById("provincia").value!=("Alava"||"Rioja"||"Navarra")){
				alert("Las provincias solo pueden ser : Alava, Rioja y Navarra)");
			}else{
				if(document.getElementById("direccion")==null){
					alert("Introduce el campo direccion!");
				}else{
					if(document.getElementById("gmail")==null){
						alert("Introduce el campo email!");
					}else{
						if(validarEmail(document.getElementById("gmail").value)==true){
							if(document.getElementById("telf")==null){
								alert("Introduce el campo telefono!");
							}else{
								if( !(/^\d{9}$/.test(document.getElementById("telf").value)) ) {
  									alert("Introduce un telefono real!");
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
		}
	}
}
function validarNombre(){
	if(document.getElementById("nombre").value==""){
		alert("Introduce el campo nombre!");
	}else{
		//alert("lleno");
	}
}
function validarEmail(mail){  
	if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
		// E-mail correcto
		return true;
	}else{ 
    	alert("E-mail incorrecto!");
    	return false;
	}
}  