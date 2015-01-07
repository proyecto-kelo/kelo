$(document).ready(function(){
	$.ajax({	
			type: "GET",
			url: "/navarra",
			dataType: "json",
			success: function(data){
				for(var i=0; i<data.length;i++){
					var elid="n_vinedo"+(i+1);
					 
					  $(".example1").append("<li><span>1</span></li>")
					//$("#vinos_navarra").append("<div id='"+elid+"'><img src='"+data[i].imagen+"'></div>");
					//$("#"+elid).css('background-image','url('+data[i].imagen+')');   <img src='"+data[i].imagen+"'width='200px' height='200px'>
				}	 	 
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
	/*function mostrar(){
	alert("KK!");
	alert(id);
	//var aa = document.getElementById('boton');
	$(id).fadeOut();
	alert("KK!");
}*/
});
$(document).ready(function(){
	$.ajax({	
			type: "GET",
			url: "/rioja",
			dataType: "json",
			success: function(data){
				for(var i=0; i<data.length;i++){
					var elid="r_vinedo"+(i+1);
					$("#vinos_rioja").append("<div id='"+elid+"'><img src='"+data[i].imagen+"'></div>");
					//$("#"+elid).css('background-image','url('+data[i].imagen+')');
					//$("#"+elid).css('background-size','100%');
				}	 	 
			}
	});
});
$(document).ready(function(){
	$.ajax({	
			type: "GET",
			url: "/alava",
			dataType: "json",
			success: function(data){
				for(var i=0; i<data.length;i++){
					var elid="a_vinedo"+(i+1);
					$("#vinos_alava").append("<div id='"+elid+"'><img src='"+data[i].imagen+"'></div>");
					//$("#"+elid).css('background-image','url('+data[i].imagen+')');
					//$("#"+elid).css('background-size','100%');
				}	 	 
			}
	});
});
