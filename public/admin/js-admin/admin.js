$(document).ready(function(){
	$( "#buscar" ).submit(function( event ) {
        //console.log("submit");
        event.preventDefault();
        //alert("por favor");
        var formData = $(this).serializeArray();
		$.ajax({	
				type: "POST",
				url: "/buscar",
				//dataType: "json",
				dataType: "html",
				data: formData,
				success: function(data){
						//alert("KK");
						document.getElementById('nombre').value=data.nombre;
						document.getElementById('provincia').value=data.provincia;
						document.getElementById('direccion').value=data.direcion;
						document.getElementById('email').value=data.email;
						document.getElementById('telf').value=data.telefono;
						document.getElementById('info').value=data.infor;
						document.getElementById('informacion').value=data.informacion;
						document.getElementById('busqueda').value=data.busqueda;
						document.getElementById('tinto').value=data.tinto;
						document.getElementById('blanco').value=data.blanco;
						document.getElementById('rosado').value=data.rosado;
				}
		});
	});
	$( "#modificar" ).submit(function( event ) {
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
	$( "#eliminar" ).submit(function( event ) {
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
	$( "#anadir" ).submit(function( event ) {
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
					alert("Aqui validaciones!");
				}
		});
	});
});
/*nombre: document.getElementById('nombre').value;
					provincia: document.getElementById('provincia').value;
					infor: document.getElementById('infor').value;
					informacion: document.getElementById('informacion').value;
					direccion: document.getElementById('direccion').value;
					telefono: document.getElementById('telefono').value;
					gmail: document.getElementById('gmail').value;
					busqueda: document.getElementById('busqueda').value;
					tinto: document.getElementById('tinto').value;
					blanco: document.getElementById('blanco').value;
					rosado: document.getElementById('rosado').value;
				*/
/*
	$.ajax({	
			type: "GET",
			url: "/elegir",
			dataType: "json",
			success: function(data){
			var elegir="";
			data.forEach(function(element, index, array) {				
				
				var str = element.nombre;
				var peq = str.toLowerCase();
				var res = peq.split(" ");
				var fin = "";
				for (var i=0; i<res.length; i++){
					fin+= res[i];
				}
				elegir +="<div id="+fin+" class='bodegasform'><header><img id='atras' src='ima-admin/back.png' width='60' height='60' ><h2>Modificar</h2></header><form id='formmodificar"+index+"' method='post' action='/modificar' ><label>Nombre Viñedo</label><input id='nombre' name='nombre' value='"+data[index].nombre+"' type='text' width='100px;' disabled><label>Provincia</label><input id='provincia' name='provincia' value='"+data[index].provincia+"' type='text' width='100px;'><label>Dirección</label><input id='direccion' name='direccion' value='"+data[index].direccion+"' type='text'><label>Email</label><input id='email' name='email' value='"+data[index].gmail+"' type='text' width='100px;'><label>Telefono</label><input id='telf' name='telf' value='"+data[index].telefono+"' type='text' width='100px;'><label>Información Corta</label><input id='info' name='info' value='"+data[index].infor+"' type='text'><label>Información Larga</label><textarea cols='15' id='informacion' name='informacion' value='' rows='10'>"+data[index].informacion+"</textarea><label>Busqueda</label><input id='busqueda' name='busqueda' value='"+data[index].busqueda+"' type='text' width='100px;'><label>Tinto</label><textarea cols='15' id='tinto' name='tinto' value='' rows='10'>"+data[index].tinto+"</textarea><label>Blanco</label><textarea cols='15' id='blanco' name='blanco' value='' rows='10'>"+data[index].blanco+"</textarea><label>Rosado</label><textarea cols='15' id='rosado' name='rosado' value='' rows='10'>"+data[index].rosado+"</textarea><label>Imagen</label><style>.thumb {height: 75px;border: 1px solid #000;margin: 10px 5px 0 0;}</style><input type='file' id='files' name='files[]' multiple /><output id='list'></output><br><br><input class='boton' id='modificar"+index+"' type='button' value='Guardar'></form></div>";

					/*elegir += "
					<script>  
					document.getElementById('modificar'+index+'').onclick = function() {
					 $.post('/modificar', {
					 	alert('kpasa');
					 	console.log('¿?');
						nombre: document.getElementById('nombre').value	
					}); 
				}</script>";*/
		/*	
			});
			
			
			$("#formularios").append(elegir);	 
			}
	});

	/*$(document).ready(function() {

	$(".boton").click(function(){

		$.post('/modificar', {

			nombre: document.getElementById('nombre').value

		});

	});*/
 /*$( "#formmodificar0" ).submit(function( event ) {

        console.log("submit");
        /* Stop form from submitting normally 
        event.preventDefault();


        var formData = $(this).serializeArray();
	
	$.ajax({	
			type: "POST",
			url: "/modificar",
			//dataType: "json",
			dataType: "html",
			data: formData,
			success: function(data){
				
					alert("KK");
					nombre: document.getElementById('nombre').value;
					provincia: document.getElementById('provincia').value;
					infor: document.getElementById('infor').value;
					informacion: document.getElementById('informacion').value;
					direccion: document.getElementById('direccion').value;
					telefono: document.getElementById('telefono').value;
					gmail: document.getElementById('gmail').value;
					busqueda: document.getElementById('busqueda').value;
					tinto: document.getElementById('tinto').value;
					blanco: document.getElementById('blanco').value;
					rosado: document.getElementById('rosado').value;
				

			}
			});
	});
});
/*
    $( "#formmodificar" ).submit(function( event ) {

        console.log("submit");
        /* Stop form from submitting normally 
        event.preventDefault();
        alert("AITOR JOPUTA!");

        var formmodificar = $(this).serializeArray();

        $.ajax({
           // type: "GET",
           type: "POST",
           url: "/user",
           //dataType: "json",
           dataType: "html",
           data: formmodificar,

           success: function(data){
              console.log(data);
              
              nombre: document.getElementById('nombre').value;
					provincia: document.getElementById('provincia').value;
					infor: document.getElementById('infor').value;
					informacion: document.getElementById('informacion').value;
					direccion: document.getElementById('direccion').value;
					telefono: document.getElementById('telefono').value;
					gmail: document.getElementById('gmail').value;
					busqueda: document.getElementById('busqueda').value;
					tinto: document.getElementById('tinto').value;
					blanco: document.getElementById('blanco').value;
					rosado: document.getElementById('rosado').value;
           }

        });


    });

/*
	var formmodificar = $(this).serializeArray();
	
	$.ajax({	
			type: "POST",
			url: "/modificar",
			//dataType: "json",
			dataType: "html",
			data: formmodificar,
			success: function(data){
				$(".modificar").click(function(){
					alert("KK");
					nombre: document.getElementById('nombre').value;
					provincia: document.getElementById('provincia').value;
					infor: document.getElementById('infor').value;
					informacion: document.getElementById('informacion').value;
					direccion: document.getElementById('direccion').value;
					telefono: document.getElementById('telefono').value;
					gmail: document.getElementById('gmail').value;
					busqueda: document.getElementById('busqueda').value;
					tinto: document.getElementById('tinto').value;
					blanco: document.getElementById('blanco').value;
					rosado: document.getElementById('rosado').value;
				});

			}
			
	});


});

/*var datos=["","" ,"" ,"", "", "", "", "", "","","" ];
var kk="as";
$(document).ready(function(){
	$.ajax({	
			type: "GET",
			url: "/admin",
			dataType: "json",
			success: function(data){
				$(".buscados").click(function(){
					var busqueda = document.getElementsByName('nombre')[0].value;
					//alert("busqueda: "+busqueda);
					
					data.forEach(function(element, index, array) {
						var str = busqueda;
						var peq = str.toLowerCase();
						var res = peq.split(" ");
						var fin = "";
						for (var i=0; i<res.length; i++){
							fin+= res[i];
						}
						
							var nombre = data[index].nombre;
							var str1 = nombre;
							var peq1 = str1.toLowerCase();
							var res1 = peq1.split(" ");
							nombre = "";
							for (var j=0; j<res1.length; j++){
								nombre+= res1[j];
							}
							//alert("antes: "+fin);
							//alert("despues: "+nombre);
							if(fin==nombre){
								//alert("****final?****");
								window.location.href="modificar.html";
								//alert(data[index].provincia+"ooooooooo");
								/*datos = [data[index].nombre,data[index].provincia ,data[index].direccion ,data[index].gmail, data[index].telefono, data[index].infor, data[index].informacion, data[index].busqueda, data[index].tinto,data[index].blanco,data[index].rosado ];
								
									alert(data[0].provincia);
								/*guarda();*/
								/*document.getElementById('nombre').value=data[index].nombre;
								document.getElementById('provincia').value=data[index].provincia;
								document.getElementById('direccion').value=data[index].direcion;
								document.getElementById('email').value=data[index].email;
								document.getElementById('telf').value=data[index].telefono;
								document.getElementById('info').value=data[index].infor;
								document.getElementById('informacion').value=data[index].informacion;
								document.getElementById('busqueda').value=data[index].busqueda;
								document.getElementById('tinto').value=data[index].tinto;
								document.getElementById('blanco').value=data[index].blanco;
								document.getElementById('rosado').value=data[index].rosado;
								$('#nombre').innerHTML = data[index].nombre;
								$('#provincia').val(data[index].provincia);
								$('#direccion').val(data[index].direcion);
								$('#email').val(data[index].gmail);
								$('#telf').val(data[index].telefono);
								$('#info').val(data[index].infor);
								$('#informacion').val(data[index].informacion);
								$('#busqueda').val(data[index].busqueda);
								$('#tinto').val(data[index].tinto);
								$('#blanco').val(data[index].blanco);
								$('#rosado').val(data[index].rosado);

							}else{
								// NO SON IGUALES!!
							}
						
					});
				});
			}, 
  			async: false	 	 
	});
	
});
function guarda(){
	var tontin="";
									for (var j=0; j<datos.length; j++){
										 tontin+= datos[j]+" ; ";

																}
																
																alert(kk);
    document.getElementById('nombre').value="HOLA!";
    document.getElementById('provincia').value=datos[1];
}*/
/*
$(document).ready(function() {

	$(".buscados").click(function(){

		$.post('/cambio', {

			nombre: document.getElementById('nombre').value

		});

	});

});

nombre: document.getElementById('nombre').value,
			provincia: document.getElementById('provincia').value,
			infor: document.getElementById('infor').value,
			informacion: document.getElementById('informacion').value,
			direccion: document.getElementById('direccion').value,
			telefono: document.getElementById('telefono').value,
			gmail: document.getElementById('gmail').value,
			busqueda: document.getElementById('busqueda').value,
			tinto: document.getElementById('tinto').value,
			blanco: document.getElementById('blanco').value,
			rosado: document.getElementById('rosado').value

*/