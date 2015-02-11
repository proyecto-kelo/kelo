$(document).ready(function(){
	$( "#formbuscar" ).submit(function( event ) {
        event.preventDefault();
        var formData = $(this).serializeArray();
		$.ajax({	
				type: "POST",
				url: "/buscar",
				dataType: "json",
				data: formData,
				success: function(data){

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
	/* Accion de Ajax al modificar un viñedo */
	$( "#formmodificar" ).submit(function( event ) {
        event.preventDefault();
        var formData = $(this).serializeArray();
		$.ajax({	
				type: "POST",
				url: "/modificar",
				dataType: "html",
				data: formData,
				success: function(data){
					alert("Modificado correctamente!");
					window.location.href="log";
				}
		});
	});
	/* Accion de Ajax al eliminar un viñedo */
	$( "#formeliminar" ).submit(function( event ) {
        event.preventDefault();
        var formData = $(this).serializeArray();
		$.ajax({	
				type: "POST",
				url: "/eliminar",
				dataType: "html",
				data: formData,
				success: function(data){
					alert("Eliminado correctamente");
					window.location.href="log";
				}
		});
	});
	/* Accion de Ajax al añadir un viñedo */
	$( "#formanadir" ).submit(function( event ) {
        event.preventDefault();
        var formData = $(this).serializeArray();
		$.ajax({	
				type: "POST",
				url: "/anadir",
				dataType: "html",
				data: formData,
				success: function(data){
					alert("Añadido correctamente");
					window.location.href="log";
				}
		});
	});
	/* Accion de Ajax al loggearte */
	$( "#formlog" ).submit(function( event ) {
        event.preventDefault();
        var formData = $(this).serializeArray();
		$.ajax({	
				type: "POST",
				url: "/log",
				dataType: "html",
				data: formData,
				success: function(data){
					$( "body" ).html(data);
				}
		});
	});
});