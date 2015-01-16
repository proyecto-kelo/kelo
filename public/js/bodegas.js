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
				// Codigo para slider
				var slider = "<div id='slider'><figure>";
				if(element.tinto!=null){
					slider+="<img src='"+element.tinto+"' alt>";
				}
				if(element.rosado!=null){
					slider+="<img src='"+element.rosado+"' alt>";
				}
				if(element.blenco!=null){
					slider+="<img src='"+element.blanco+"' alt>";
				}
				slider+="</figure></div>";
				var kkculo = "<div id='wrapper-"+fin+"'><!-- Slideshow 3 --><ul class='rslides' class='slider3'><li><img src='images/1.jpg' alt=''></li><li><img src='images/2.jpg' alt=''></li><li><img src='images/3.jpg' alt=''></li></ul><!-- Slideshow 3 Pager --><ul class='slider3-pager'><li><a href='#'><img src='images/1_thumb.jpg' alt=''></a></li><li><a href='#'><img src='images/2_thumb.jpg' alt=''></a></li><li><a href='#'><img src='images/3_thumb.jpg' alt=''></a></li></ul></div>";
				// Creamos una etiqueta de articulo con un hipervinculo al pop-up
				// Introducimos todos los atributos correspondientes del viñedo desde la bd
				//
				bodegas += "<article><a href='#"+fin+"'><img src='"+element.imagen+"'></img><p>"+element.infor+"</p></a></article>";	//									
				bodegas += "<div id='"+fin+"' class='modalDialog'><div><a href='#close' title='Close' class='close'>X</a><h2>"+element.nombre+"</h2><p>"+element.informacion+"</p>"+kkculo+"</div></div>";
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

			$(".tfbutton").click(function(){
				var busqueda = document.getElementsByName('q')[0].value;
				var provincia = "#vinos_";
				alert("Se ha seleccionado: "+busqueda);
				var str = busqueda;
				var peq = str.toLowerCase();
				var res = peq.split(" ");
				var fin = "";
				for (var i=0; i<res.length; i++){
					fin+= res[i];
				}
				alert("Despues: "+fin);
				for (var i=0; i<data.length; i++){
					var nombre = data[i].nombre;
					//alert(nombre);
					var str1 = nombre;
					var peq1 = str1.toLowerCase();
					var res1 = peq1.split(" ");
					nombre = "";
					for (var j=0; j<res1.length; j++){
						nombre+= res1[j];
					}
					alert("Hey! "+nombre);
					if(fin==nombre){
						alert("hola");
						provincia = provincia + data[i].provincia;
						provincia = provincia.toLowerCase();
						alert("la provincia es: "+provincia);
						$(provincia).css("display","block");
						alert(nombre);
						
						fin="#"+fin;
						$(fin).css({opacity:1});
						//window.location="http://localhost:8080/"+fin;
						/*var url = "http://localhost:8080/"+fin;
						$(location).attr('href',url);*/
						//alert(fin);
						break;

						//alert("Se ha comparado"+nombre);
					}
				}
			});			 
			}	 	 
	});
	// Enseñar viñedos de cada provincia segun donde se haga click
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