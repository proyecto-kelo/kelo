// Añade al html el codigo que se precisa (gestión):
// añadir, eliminar y modificar
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
// Validar campos del formulario
// 1- No estar todos los campos vacios
// 2- Provincias solo Alava,Rioja, Navarra
// 3- Validar e-mail
// 4- Validar telefono
function validarCampos(){
	var princi=0;
	if(document.getElementById("nombre").value==""){
		alert("Introduce el campo nombre!");
	}else{
		if(document.getElementById("provincia").value==""){
			alert("Introduce el campo provincia!");
		}else{
			if(document.getElementById("provincia").value==("Alava")){
				princi++;
			}
			if(document.getElementById("provincia").value==("La Rioja")){
				princi++;
			}
			if(document.getElementById("provincia").value==("Navarra")){
				princi++;
			}
			if(princi!=1){
				alert("Las provincias solo pueden ser : Alava, La Rioja y Navarra");
			}else{
				if(document.getElementById("direccion").value==""){
					alert("Introduce el campo direccion!");
				}else{
					if(document.getElementById("gmail").value==""){
						alert("Introduce el campo email!");
					}else{
						if(validarEmail(document.getElementById("gmail").value)==true){
							if(document.getElementById("telf").value==""){
								alert("Introduce el campo telefono!");
							}else{
								if( !(/^\d{9}$/.test(document.getElementById("telf").value)) ) {
  									alert("Introduce un telefono real!");
								}else{
									if(document.getElementById("infor").value==""){
									alert("Introduce el campo informacion corta!");
									}else{
										if(document.getElementById("informacion").value==""){
											alert("Introduce el campo informacion larga!");
										}else{
											if(document.getElementById("busqueda").value==""){
												alert("Introduce el campo busqueda!");
											}else{
												if(document.getElementById("imagen").value==""){
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
/* Funcion de validar nombre */
function validarNombre(){
	if(document.getElementById("nombre").value==""){
		alert("Introduce el campo nombre!");
	}else{
		
	}
}
/* Funcion de validar e-mail */
// regrex
function validarEmail(mail){  
	if(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)){
		return true;
	}else{ 
    	alert("E-mail incorrecto!");
    	return false;
	}
}  