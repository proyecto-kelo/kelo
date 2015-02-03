$(document).ready(function(){
	$( "#formbuscar" ).submit(function( event ) {
        //console.log("submit");
        event.preventDefault();
        //alert("por favor");
        var formData = $(this).serializeArray();
		$.ajax({	
				type: "POST",
				url: "/buscar",
				dataType: "json",
				//dataType: "html",
				data: formData,
				success: function(data){
					//alert("KK");
					$('#nombre').val(data[0].nombre);
					$('#provincia').val(data[0].provincia);
					$('#direccion').val(data[0].direccion);
					$('#gmail').val(data[0].gmail);
					$('#telf').val(data[0].telefono);
					$('#infor').val(data[0].infor);
					$('#informacion').val(data[0].informacion);
					$('#busqueda').val(data[0].busqueda);
					$('#tinto').val(data[0].tinto);
					$('#blanco').val(data[0].blanco);
					$('#rosado').val(data[0].rosado);
					$('#imagen').val(data[0].imagen);
				}
		});
	});
	$( "#formmodificar" ).submit(function( event ) {
        //console.log("submit");
        event.preventDefault();
        //alert("por favor");
        var formData = $(this).serializeArray();
		$.ajax({	
				type: "POST",
				url: "/modificar",
				//dataType: "json",
				dataType: "html",
				data: formData,
				success: function(data){
					/* Validaciones */
					alert("Aqui validaciones!");
				}
		});
	});
	$( "#formeliminar" ).submit(function( event ) {
        //console.log("submit");
        event.preventDefault();
        //alert("por favor");
        var formData = $(this).serializeArray();
		$.ajax({	
				type: "POST",
				url: "/eliminar",
				//dataType: "json",
				dataType: "html",
				data: formData,
				success: function(data){
					/* Validaciones */
					alert("Aqui validaciones!");
				}
		});
	});
	$( "#formanadir" ).submit(function( event ) {
        //console.log("submit");
        event.preventDefault();
        //alert("por favor");
        var formData = $(this).serializeArray();
		$.ajax({	
				type: "POST",
				url: "/anadir",
				//dataType: "json",
				dataType: "html",
				data: formData,
				success: function(data){
					/* Validaciones */
					validarCampos();
				}
		});
	});
	function validarCampos(){
		var nombre = document.getElementById("nombre").value;
		var provincia = document.getElementById("provincia").value;
		var direccion = document.getElementById("direccion").value;
		var gmail = document.getElementById("gmail").value;
		var telefono = document.getElementById("tefl").value;
		var infor = document.getElementById("infor").value;
		var informacion = document.getElementById("informacion").value;
		var busqueda = document.getElementById("busqueda").value;
		var imagen = document.getElementById("imagen").value;

		if(nombre==""){
			alert("Introduce el campo nombre!");
		}else{
			if(provincia=""){
				alert("Introduce el campo provincia!");
			}else{
				if(direccion=""){
					alert("Introduce el campo direccion!");
				}else{
					if(gmail=""){
						alert("Introduce el campo email!");
					}else{
						if(telefono=""){
							alert("Introduce el campo telefono!");
						}else{
							if(infor=""){
								alert("Introduce el campo informacion corta!");
							}else{
								if(informacion=""){
									alert("Introduce el campo informacion larga!");
								}else{
									if(busqueda=""){
										alert("Introduce el campo busqueda!");
									}else{
										if(imagen=""){
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
});