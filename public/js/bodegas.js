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
				// Imagen de la botella principal
				var slider = "<section><div><center><div><img id='principal-"+fin+"'";
				if(element.tinto!=""){
					//Poner tinto en grande
					slider+=" src='"+element.tinto+"' height='200' width='200'></div></center></div>";
				}else{
					if(element.rosado!=""){
						// Poner sorado en grande
						slider+="src='"+element.rosado+"' height='200' width='200'></div></center></div>";
					}else{
						if(element.blanco!=""){
							// Poner Blanco en grande
							slider+="src='"+element.blanco+"' height='200' width='200'></div></center></div>";
						}else{
							// NO HAY FOTOS!!!
						}
					}
				}
				// Imagenes pequeñas
				slider+= "<div class='imgpeke'>";
				if(element.tinto!=""){
					slider+="<img id='"+fin+"-tinto' class="+fin+" src='"+element.tinto+"' height='50' width='50' onClick='pasar(this.id)'>";
				}
				if(element.rosado!=""){
					slider+="<img id='"+fin+"-rosado' class="+fin+" src='"+element.rosado+"' height='50' width='50' onClick='pasar(this.id)'>";
				}
				if(element.blanco!=""){
					slider+="<img id='"+fin+"-blanco' class="+fin+" src='"+element.blanco+"' height='50' width='50' onClick='pasar(this.id)'>";
				}
				slider+= "</div></section>";
				// Introducimos todos los atributos correspondientes del viñedo desde la bd
				//
				bodegas += "<article><a href='#"+fin+"'><img src='"+element.imagen+"'></img><p>"+element.infor+"</p></a></article>";	//									
				bodegas += "<div id='"+fin+"' class='modalDialog'><div><a href='#close' title='Close' class='close'>X</a><h2>"+element.nombre+"</h2><p>"+element.informacion+"</p>"+slider+"</div></div>";
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
				// Codigo para slider
				// Imagen de la botella principal
				var slider = "<section><div><center><div><img id='principal-"+fin+"'";
				if(element.tinto!=""){
					//Poner tinto en grande
					slider+=" src='"+element.tinto+"' height='200' width='200'></div></center></div>";
				}else{
					if(element.rosado!=""){
						// Poner sorado en grande
						slider+="src='"+element.rosado+"' height='200' width='200'></div></center></div>";
					}else{
						if(element.blanco!=""){
							// Poner Blanco en grande
							slider+="src='"+element.blanco+"' height='200' width='200'></div></center></div>";
						}else{
							// NO HAY FOTOS!!!
						}
					}
				}
				// Imagenes pequeñas
				slider+= "<div class='imgpeke'>";
				if(element.tinto!=""){
					slider+="<img id='"+fin+"-tinto' class="+fin+" src='"+element.tinto+"' height='50' width='50' onClick='pasar(this.id)'>";
				}
				if(element.rosado!=""){
					slider+="<img id='"+fin+"-rosado' class="+fin+" src='"+element.rosado+"' height='50' width='50' onClick='pasar(this.id)'>";
				}
				if(element.blanco!=""){
					slider+="<img id='"+fin+"-blanco' class="+fin+" src='"+element.blanco+"' height='50' width='50' onClick='pasar(this.id)'>";
				}
				slider+= "</div></section>";
				// Creamos una etiqueta de articulo con un hipervinculo al pop-up
				// Introducimos todos los atributos correspondientes del viñedo desde la bd
				bodegas += "<article><a href='#"+fin+"'><img src='"+element.imagen+"'></img><p>"+element.infor+"</p></a></article>";					
				bodegas += "<div id='"+fin+"' class='modalDialog'><div><a href='#close' title='Close' class='close'>X</a><h2>"+element.nombre+"</h2><p>"+element.informacion+"</p>"+slider+"</div></div>";
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
				// Codigo para slider
				// Imagen de la botella principal
				var slider = "<section><div><center><div><img id='principal-"+fin+"'";
				if(element.tinto!=""){
					//Poner tinto en grande
					slider+=" src='"+element.tinto+"' height='200' width='200'></div></center></div>";
				}else{
					if(element.rosado!=""){
						// Poner sorado en grande
						slider+="src='"+element.rosado+"' height='200' width='200'></div></center></div>";
					}else{
						if(element.blanco!=""){
							// Poner Blanco en grande
							slider+="src='"+element.blanco+"' height='200' width='200'></div></center></div>";
						}else{
							// NO HAY FOTOS!!!
						}
					}
				}
				// Imagenes pequeñas
				slider+= "<div class='imgpeke'>";
				if(element.tinto!=""){
					slider+="<img id='"+fin+"-tinto' class="+fin+" src='"+element.tinto+"' height='50' width='50' onClick='pasar(this.id)'>";
				}
				if(element.rosado!=""){
					slider+="<img id='"+fin+"-rosado' class="+fin+" src='"+element.rosado+"' height='50' width='50' onClick='pasar(this.id)'>";
				}
				if(element.blanco!=""){
					slider+="<img id='"+fin+"-blanco' class="+fin+" src='"+element.blanco+"' height='50' width='50' onClick='pasar(this.id)'>";
				}
				slider+= "</div></section>";
				// Creamos una etiqueta de articulo con un hipervinculo al pop-up
				// Introducimos todos los atributos correspondientes del viñedo desde la bd
				bodegas += "<article><a href='#"+fin+"'><img src='"+element.imagen+"'></img><p>"+element.infor+"</p></a></article>";					
				bodegas += "<div id='"+fin+"' class='modalDialog'><div><a href='#close' title='Close' class='close'>X</a><h2>"+element.nombre+"</h2><p>"+element.informacion+"</p>"+slider+"</div></div>";
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