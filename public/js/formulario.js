// Funcion de formulario que recoge los datos
function enviar(){
    var nombre = document.getElementById('nombre').value;
    var arraySplit = nombre.split("");
    if (nombre.length==0){
        alert("nombre esta vacio");
    }else{
        var asunto = document.getElementById('asunto').value;
        var arraySplit = asunto.split("");
        if (asunto.length==0){
            alert("Asunto esta vacio");
        }else{
            var mensaje = document.getElementById('mensaje').value;
            var arraySplit = mensaje.split("");
            if (mensaje.length==0){
                alert("Mensaje esta vacio");
            }else{
                $.ajax({
                    type: "POST",
                    url: "enviar.php",
                    data: $("#formulario").serialize(),
                    success: function(data){
                        alert(data);
                    }
                });
            }
        } 
    }
    
    
}