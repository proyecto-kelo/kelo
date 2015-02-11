$(document).ready(function(){
	/****************************************************************************************************************/
	/* GET para crear los elementos necesarios de cada viñedo */
	// Navarra, Alava y La Rioja
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
				var slider = "<section class='slider_contacto'><div><div><div><img class='foto_slider_grande' id='principal-"+fin+"'";
				if(element.tinto!=""){
					//Poner tinto en grande
					slider+=" src='"+element.tinto+"' height='200' width='200'></div></div>";
				}else{
					if(element.rosado!=""){
						// Poner sorado en grande
						slider+="src='"+element.rosado+"' height='200' width='200'></div></div>";
					}else{
						if(element.blanco!=""){
							// Poner Blanco en grande
							slider+="src='"+element.blanco+"' height='200' width='200'></div></div>";
						}else{
							// NO HAY FOTOS!!!
						}
					}
				}
				// Imagenes pequeñas
				slider+= "<div><div class='info_contacto'><p>Tlf.:"+element.telefono+"</p><p>Email:"+element.gmail+"</p><p>Dirección:"+element.direccion+","+element.provincia+"</p></div></div></div><div class='imgpeke'>";
				if(element.tinto!=""){
					slider+="<img id='"+fin+"-tinto' class="+fin+" src='"+element.tinto+"' height='50' width='50' onClick='pasar(this.id)'>";
				}
				if(element.rosado!=""){
					slider+="<img id='"+fin+"-rosado' class="+fin+" src='"+element.rosado+"' height='50' width='50' onClick='pasar(this.id)'>";
				}
				if(element.blanco!=""){
					slider+="<img id='"+fin+"-blanco' class="+fin+" src='"+element.blanco+"' height='50' width='50' onClick='pasar(this.id)'>";
				}
				slider+= "</div>";

				
				// Introducimos todos los atributos correspondientes del viñedo desde la bd
				//
				bodegas += "<article><a href='#"+fin+"'><img src='"+element.imagen+"'></img><p>"+element.infor+"</p></a></article>";	//									
				bodegas += "<div id='"+fin+"' class='modalDialog'><div><a href='#close' title='Close' class='close'>X</a><h2>"+element.nombre+"</h2><p class='justificado'>"+element.informacion+"</p>"+slider+"</section><div><li class='comprar'><a href='"+element.busqueda+"'><img src='images/cart.png' width='50px' height='50px'></a></li></div></div></div>";
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
				var slider = "<section><div><div><div><img class='foto_slider_grande' id='principal-"+fin+"'";
				if(element.tinto!=""){
					//Poner tinto en grande
					slider+=" src='"+element.tinto+"' height='200' width='200'></div></div>";
				}else{
					if(element.rosado!=""){
						// Poner sorado en grande
						slider+="src='"+element.rosado+"' height='200' width='200'></div></div>";
					}else{
						if(element.blanco!=""){
							// Poner Blanco en grande
							slider+="src='"+element.blanco+"' height='200' width='200'></div></div>";
						}else{
							// NO HAY FOTOS!!!
						}
					}
				}
				// Imagenes pequeñas
				slider+= "<div><div class='info_contacto'><p>Tlf.:"+element.telefono+"</p><p>Email:"+element.gmail+"</p><p>Dirección:"+element.direccion+","+element.provincia+"</p></div></div></div><div class='imgpeke'>";
				if(element.tinto!=""){
					slider+="<img id='"+fin+"-tinto' class="+fin+" src='"+element.tinto+"' height='50' width='50' onClick='pasar(this.id)'>";
				}
				if(element.rosado!=""){
					slider+="<img id='"+fin+"-rosado' class="+fin+" src='"+element.rosado+"' height='50' width='50' onClick='pasar(this.id)'>";
				}
				if(element.blanco!=""){
					slider+="<img id='"+fin+"-blanco' class="+fin+" src='"+element.blanco+"' height='50' width='50' onClick='pasar(this.id)'>";
				}
				slider+= "</div>";

				
				// Introducimos todos los atributos correspondientes del viñedo desde la bd
				//
				bodegas += "<article><a href='#"+fin+"'><img src='"+element.imagen+"'></img><p>"+element.infor+"</p></a></article>";	//									
				bodegas += "<div id='"+fin+"' class='modalDialog'><div><a href='#close' title='Close' class='close'>X</a><h2>"+element.nombre+"</h2><p class='justificado'>"+element.informacion+"</p>"+slider+"</section><div><li class='comprar'><a href='"+element.busqueda+"'><img src='images/cart.png' width='50px' height='50px'></a></li></div></div></div>";
			});
			// Cerramos los <div> del principio
			bodegas += "</div>";
			// Introducimos la variable bodegas en nuestro div #vinos_navarra
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
				var slider = "<section><div><div><div><img class='foto_slider_grande' id='principal-"+fin+"'";
				if(element.tinto!=""){
					//Poner tinto en grande
					slider+=" src='"+element.tinto+"' height='200' width='200'></div></div>";
				}else{
					if(element.rosado!=""){
						// Poner sorado en grande
						slider+="src='"+element.rosado+"' height='200' width='200'></div></div>";
					}else{
						if(element.blanco!=""){
							// Poner Blanco en grande
							slider+="src='"+element.blanco+"' height='200' width='200'></div></div>";
						}else{
							// NO HAY FOTOS!!!
						}
					}
				}
				// Imagenes pequeñas
				slider+= "<div><div class='info_contacto'><p>Tlf.:"+element.telefono+"</p><p>Email:"+element.gmail+"</p><p>Dirección:"+element.direccion+","+element.provincia+"</p></div></div></div><div class='imgpeke'>";
				if(element.tinto!=""){
					slider+="<img id='"+fin+"-tinto' class="+fin+" src='"+element.tinto+"' height='50' width='50' onClick='pasar(this.id)'>";
				}
				if(element.rosado!=""){
					slider+="<img id='"+fin+"-rosado' class="+fin+" src='"+element.rosado+"' height='50' width='50' onClick='pasar(this.id)'>";
				}
				if(element.blanco!=""){
					slider+="<img id='"+fin+"-blanco' class="+fin+" src='"+element.blanco+"' height='50' width='50' onClick='pasar(this.id)'>";
				}
				slider+= "</div>";

				
				// Introducimos todos los atributos correspondientes del viñedo desde la bd
				//
				bodegas += "<article><a href='#"+fin+"'><img src='"+element.imagen+"'></img><p>"+element.infor+"</p></a></article>";	//									
				bodegas += "<div id='"+fin+"' class='modalDialog'><div><a href='#close' title='Close' class='close'>X</a><h2>"+element.nombre+"</h2><p class='justificado'>"+element.informacion+"</p>"+slider+"</section><div><li class='comprar'><a href='"+element.busqueda+"'><img src='images/cart.png' width='50px' height='50px'></a></li></div></div></div>";
			});
			// Cerramos los <div> del principio
			bodegas += "</div>";
			// Introducimos la variable bodegas en nuestro div #vinos_navarra
			$("#vinos_alava").append(bodegas);	 
			}
	});
	/****************************************************************************************************************/
	/* Buscador */
	$.ajax({	
			type: "GET",
			url: "/buscar",
			dataType: "json",
			success: function(data){
				// Al hacer click en el boton de buscar...
			$(".tfbutton").click(function(){
				// Coger el nombre del campo y hace visible el pop up
				var busqueda = document.getElementsByName('q')[0].value;
				var provincia = "#vinos_";
				var str = busqueda;
				var peq = str.toLowerCase();
				var res = peq.split(" ");
				var fin = "";
				for (var i=0; i<res.length; i++){
					fin+= res[i];
				}
				for (var i=0; i<data.length; i++){
					var nombre = data[i].nombre;
					var str1 = nombre;
					var peq1 = str1.toLowerCase();
					var res1 = peq1.split(" ");
					nombre = "";
					for (var j=0; j<res1.length; j++){
						nombre+= res1[j];
					}
					if(fin==nombre){
						provincia = provincia + data[i].provincia;
						provincia = provincia.toLowerCase();
						$(provincia).css("display","block");						
						fin="#"+fin;
						$(fin).css({opacity:1});
						break;
					}
				}
			});			 
			}	 	 
	});
	// Enseñar viñedos de cada provincia segun donde se haga click
	/* Efectos de jquery */
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