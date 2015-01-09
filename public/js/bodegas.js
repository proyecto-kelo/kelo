$(document).ready(function(){
	$.ajax({	
			type: "GET",
			url: "/navarra",
			dataType: "json",
			success: function(data){
			//Creamos una variable, bodegas, para meter instrucciones html
			//Después lo insertaremos en nuestro div de la provincia, Navarra en este caso
			var bodegas = "<div class='vinedos'>";
			//Por cada elemento del json recibido (for por cada elemento)
			data.forEach(function(element, index, array) {				
				// Recibimos el nombre de cada bodega para darle el id con su nombre
				// Lo ponemos en minuscula y le quitamos los espacios
				var str = element.nombre;
				var peq = str.toLowerCase();
				var res = peq.split(" ");
				var fin = "";
				for (var i=0; i<res.length; i++){
					fin+= res[i];
				}
				// Creamos una etiqueta de articulo con un hipervinculo al pop-up
				// Introducimos todos los atributos correspondientes del viñedo desde la bd
				bodegas += "<article><a href='#"+fin+"'><img src='"+element.imagen+"'></img><p>"+element.infor+"</p></a></article>";					
				bodegas += "<div id='"+fin+"' class='modalDialog'><div><a href='#close' title='Close' class='close'>X</a><h2>"+element.nombre+"</h2><p>"+element.informacion+"</p></div></div>";
			});
			// Cerramos los <div> del principio
			bodegas += "</div>";
			// Introducimos la variable bodegas en nuestro div #vinos_navarra
			$("#vinos_navarra").append(bodegas);	 
			}
	});
	$.ajax({	
			type: "GET",
			url: "/rioja",
			dataType: "json",
			success: function(data){
			//Creamos una variable, bodegas, para meter instrucciones html
			//Después lo insertaremos en nuestro div de la provincia, La Rioja en este caso
			var bodegas = "<div class='vinedos'>";
			//Por cada elemento del json recibido (for por cada elemento)
			data.forEach(function(element, index, array) {
				// Recibimos el nombre de cada bodega para darle el id con su nombre
				// Lo ponemos en minuscula y le quitamos los espacios				
				var str = element.nombre;
				var peq = str.toLowerCase();
				var res = peq.split(" ");
				var fin = "";
				for (var i=0; i<res.length; i++){
					fin+= res[i];
				}
				// Creamos una etiqueta de articulo con un hipervinculo al pop-up
				// Introducimos todos los atributos correspondientes del viñedo desde la bd
				bodegas += "<article><a href='#"+fin+"'><img src='"+element.imagen+"'></img><p>"+element.infor+"</p></a></article>";					
				bodegas += "<div id='"+fin+"' class='modalDialog'><div><a href='#close' title='Close' class='close'>X</a><h2>"+element.nombre+"</h2><p>"+element.informacion+"</p></div></div>";
			});		
			// Cerramos los <div> del principio
			bodegas += "</div>";
			// Introducimos la variable bodegas en nuestro div #vinos_rioja
			$("#vinos_rioja").append(bodegas);	 
			}
	});
	$.ajax({	
			type: "GET",
			url: "/alava",
			dataType: "json",
			success: function(data){
			//Creamos una variable, bodegas, para meter instrucciones html
			//Después lo insertaremos en nuestro div de la provincia, Alava en este caso
			var bodegas = "<div class='vinedos'>";
			// Recibimos el nombre de cada bodega para darle el id con su nombre
			// Lo ponemos en minuscula y le quitamos los espacios				
			data.forEach(function(element, index, array) {				
				var str = element.nombre;
				var peq = str.toLowerCase();
				var res = peq.split(" ");
				var fin = "";
				for (var i=0; i<res.length; i++){
					fin+= res[i];
				}
				// Creamos una etiqueta de articulo con un hipervinculo al pop-up
				// Introducimos todos los atributos correspondientes del viñedo desde la bd
				bodegas += "<article><a href='#"+fin+"'><img src='"+element.imagen+"'></img><p>"+element.infor+"</p></a></article>";					
				bodegas += "<div id='"+fin+"' class='modalDialog'><div><a href='#close' title='Close' class='close'>X</a><h2>"+element.nombre+"</h2><p>"+element.informacion+"</p></div></div>";
			});		
			// Cerramos los <div> del principio
			bodegas += "</div>";
			// Introducimos la variable bodegas en nuestro div #vinos_alava
			$("#vinos_alava").append(bodegas);	 
			}	 	 
	});
	/*Prueba, no se sabe si esta bien o mal*/
	$.ajax({	
			type: "GET",
			url: "/buscar",
			dataType: "json",
			success: function(data){
			
			var busqueda = getElementsByName('q')[0].value;
			alert("Se ha seleccionado"+busqueda);
			data.forEach(function(element, index, array) {				
				var nombre = element[index].nombre;
					alert("Se ha seleccionado"+nombre);
				if(busqueda==nombre){
					alert("Se ha seleccionado"+busqueda);
				}
			});		
			 
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