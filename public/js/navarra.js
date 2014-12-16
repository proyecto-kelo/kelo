$(document).ready(function(){
	$.ajax({	
			type: "GET",
			url: "/navarra",
			dataType: "json",
			success: function(data){
				 $("#vinedo1").css('background-image','url('+'http://www.mediafire.com/convkey/fd28/edpn2c1f0p3gnzz6g.jpg'+')');
				 $("#vinedo2").css('background-image','url('+data[1].imagen+')');					 
				 $("#vinedo3").css('background-image','url('+data[2].imagen+')');			 	 
			}
	});
});