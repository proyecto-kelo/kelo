$(document).ready(function(){
	event.preventDefault();
	var formData = $(this).serializeArray();
	$.ajax({	
		type: "POST",
		url: "/tiempo",
		dataType: "json",
		data: formData,
		success: function(data){
			var dato= "<p>Nombre: "+data.name+"</p><p>Tiempo: "+data.weather[0].main+"</p><p>Temperatura: "+data.main.temp+"Kº</p>";
			$("#tiempo").append(dato);
		}
	});
});