$(document).ready(function(){
	$.ajax({	
			type: "GET",
			url: "/navarra",
			dataType: "json",
			success: function(data){
			//Creamos una variable String para meter instrucciones html, que será la que pasaremos despues al html
			//Primero creamos un <div> en el html, le ponemos un título y subtítulo, y abrimos otro <div> dentro para meter los pintxos
			var bodegas = "<div class='vinedos'>";

			//Por cada elemento del json recibido
			data.forEach(function(element, index, array) {				
				
				//A la variable String le sumamos la imágen, nombre y descripción del elemento pintxo
				bodegas += "<article><img src='"+element.imagen+"'></img><p>"+element.informacion+"</p></article>";					

			});		
			
			//Cerramos los <div> del html
			bodegas += "</div>";

			//Enviamos la variable pintxos, un String simple con instrucciones html, y le indicamos que lo cargue en el div "pintxos"
			$("#vinos_navarra").append(bodegas);	 
			}
	});
	$.ajax({	
			type: "GET",
			url: "/rioja",
			dataType: "json",
			success: function(data){
				//Creamos una variable String para meter instrucciones html, que será la que pasaremos despues al html
			//Primero creamos un <div> en el html, le ponemos un título y subtítulo, y abrimos otro <div> dentro para meter los pintxos
			var bodegas = "<div class='vinedos'>";

			//Por cada elemento del json recibido
			data.forEach(function(element, index, array) {				
				
				//A la variable String le sumamos la imágen, nombre y descripción del elemento pintxo
				bodegas += "<article><img src='"+element.imagen+"'></img></article>";					

			});		
			
			//Cerramos los <div> del html
			bodegas += "</div>";

			//Enviamos la variable pintxos, un String simple con instrucciones html, y le indicamos que lo cargue en el div "pintxos"
			$("#vinos_rioja").append(bodegas);	 
			}	 	 
			
	});
	$.ajax({	
			type: "GET",
			url: "/alava",
			dataType: "json",
			success: function(data){
				//Creamos una variable String para meter instrucciones html, que será la que pasaremos despues al html
			//Primero creamos un <div> en el html, le ponemos un título y subtítulo, y abrimos otro <div> dentro para meter los pintxos
			var bodegas = "<div class='vinedos'>";

			//Por cada elemento del json recibido
			data.forEach(function(element, index, array) {				
				
				//A la variable String le sumamos la imágen, nombre y descripción del elemento pintxo
				bodegas += "<article><img src='"+element.imagen+"'></img></article>";					

			});		
			
			//Cerramos los <div> del html
			bodegas += "</div>";

			//Enviamos la variable pintxos, un String simple con instrucciones html, y le indicamos que lo cargue en el div "pintxos"
			$("#vinos_alava").append(bodegas);	 
			}	 	 
			
	});
	$("#box1").click(function(){
		$("#vinos_rioja").hide();
		$("#vinos_alava").hide();
		$("#vinos_navarra").show("slow");
	});

	$("#box2").click(function(){
		$("#vinos_navarra").hide();
		$("#vinos_alava").hide();
		$("#vinos_rioja").show("slow");
	});

	$("#box3").click(function(){
		$("#vinos_rioja").hide();
		$("#vinos_navarra").hide();
		$("#vinos_alava").show("slow");
	});
});