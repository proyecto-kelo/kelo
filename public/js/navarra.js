$(document).ready(function(){
	$.ajax({	
			type: "GET",
			url: "/navarra",
			dataType: "json",
			success: function(data){
				 $("#vinedo1").css('background-image','url('+data[0].imagen+')');
				 $("#vinedo2").css('background-image','url('+data[1].imagen+')');					 
				 $("#vinedo3").css('background-image','url('+data[2].imagen+')');			 	 
			}
	});
});