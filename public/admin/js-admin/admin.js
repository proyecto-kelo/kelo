$(document).ready(function(){
	$.ajax({	
			type: "GET",
			url: "/modificar",
			dataType: "json",
			success: function(data){
			var churro="";
			data.forEach(function(element, index, array) {				
				
				var str = element.nombre;
				var peq = str.toLowerCase();
				var res = peq.split(" ");
				var fin = "";
				for (var i=0; i<res.length; i++){
					fin+= res[i];
				}
				churro +="<div id='envelope'><div id="+fin+" class='bodegasform'><header><img id='atras' src='ima-admin/back.png' width='60' height='60' ><h2>Modificar</h2></header><form id='formmodificar' method='post'><label>Nombre Viñedo</label><input id='nombre' name='nombre' value='"+data[index].nombre+"' type='text' width='100px;'><label>Provincia</label><input id='provincia' name='provincia' value='"+data[index].provincia+"' type='text' width='100px;'><label>Dirección</label><input id='direccion' name='direccion' value='"+data[index].direccion+"' type='text'><label>Email</label><input id='email' name='email' value='"+data[index].gmail+"' type='text' width='100px;'><label>Telefono</label><input id='telf' name='telf' value='"+data[index].telefono+"' type='text' width='100px;'><label>Información Corta</label><input id='info' name='info' value='"+data[index].infor+"' type='text'><label>Información Larga</label><textarea cols='15' id='informacion' name='informacion' value='"+data[index].informacion+"' rows='10'></textarea><label>Busqueda</label><input id='busqueda' name='busqueda' value='"+data[index].busqueda+"' type='text' width='100px;'><label>Tinto</label><textarea cols='15' id='tinto' name='tinto' value='"+data[index].tinto+"' rows='10'></textarea><label>Blanco</label><textarea cols='15' id='blanco' name='blanco' value='"+data[index].blanco+"' rows='10'></textarea><label>Rosado</label><textarea cols='15' id='rosado' name='rosado' value='"+data[index].rosado+"' rows='10'></textarea><label>Imagen</label><style>.thumb {height: 75px;border: 1px solid #000;margin: 10px 5px 0 0;}</style><input type='file' id='files' name='files[]' multiple /><output id='list'></output><br><br><input id='submit' type='button' value='Guardar'  onClick='princi.html'></form></div></div>";
			
			});
			
			
			$("#formularios").append(churro);	 
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
*/