// Sacar el nombre del pueblo, tiempo y la temperatura (en Kelvin) en el cuerpo del hmtl
$(document).ready(function(){
	event.preventDefault();
	var formData = $(this).serializeArray();
	$.ajax({	
		type: "GET",
		url: "/tiempo",
		dataType: "json",
		data: formData,
		success: function(data){
			var dato= "<p>Nombre: "+data.name+"</p><p>Tiempo: "+data.weather[0].main+"</p><p>Temperatura: "+data.main.temp+"Kº</p>";
			$("#tiempo").append(dato);
		}
	});
});