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

					//rellenar la informacion para modificarlo
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

					//poner disponibles las areas
					$("#provincia").prop("readonly",false);
					$("#direccion").prop("readonly",false);
					$("#gmail").prop("readonly",false);
					$("#telf").prop("readonly",false);
					$("#infor").prop("readonly",false);
					$("#informacion").prop("readonly",false);
					$("#busqueda").prop("readonly",false);
					$("#tinto").prop("readonly",false);
					$("#blanco").prop("readonly",false);
					$("#rosado").prop("readonly",false);
					$("#imagen").prop("readonly",false);

					$("#modificar").prop("disabled",false);

				}
		});
	});
	$( "#formmodificar" ).submit(function( event ) {
        event.preventDefault();
        var formData = $(this).serializeArray();
		$.ajax({	
				type: "POST",
				url: "/modificar",
				dataType: "html",
				data: formData,
				success: function(data){
					/* Validaciones */
					alert("Modificado correctamente!");
					window.location.href="princi";
				}
		});
	});
	$( "#formeliminar" ).submit(function( event ) {
        event.preventDefault();
        var formData = $(this).serializeArray();
		$.ajax({	
				type: "POST",
				url: "/eliminar",
				dataType: "html",
				data: formData,
				success: function(data){
					/* Validaciones */
					alert("Eliminado correctamente");
					window.location.href="princi";
				}
		});
	});
	$( "#formanadir" ).submit(function( event ) {
        event.preventDefault();
        var formData = $(this).serializeArray();
		$.ajax({	
				type: "POST",
				url: "/anadir",
				//dataType: "json",
				dataType: "html",
				data: formData,
				success: function(data){
					/* Validaciones */
					alert("Añadido correctamente");
					window.location.href="princi";
				}
		});
	});
	$( "#formlog" ).submit(function( event ) {
        event.preventDefault();
        var formData = $(this).serializeArray();
		$.ajax({	
				type: "POST",
				url: "/log",
				//dataType: "json",
				dataType: "html",
				data: formData,
				success: function(data){
					/* Validaciones */
					//alert(" Ajax log ");
					//window.location.href="princi.html";
					//window.location.href="princi";
				}
		});
	});
});