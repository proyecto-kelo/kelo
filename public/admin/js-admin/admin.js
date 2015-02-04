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
					window.location.href="princi.html";
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
					window.location.href="princi.html";
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
					window.location.href="princi.html";
				}
		});
	});
});