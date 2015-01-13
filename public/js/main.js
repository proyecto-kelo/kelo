// Funcion de formulario que recoge los datos
function enviar(){
    var nombre = document.getElementById('nombre').value;
    var arraySplit = nombre.split("");
    if (nombre.length==0){
        alert("nombre esta vacio");
    }
    var asunto = document.getElementById('asunto').value;
    var arraySplit = asunto.split("");
    if (asunto.length==0){
        alert("Asunto esta vacio");
    } 
    var mensaje = document.getElementById('mensaje').value;
    var arraySplit = mensaje.split("");
    if (mensaje.length==0){
        alert("Mensaje esta vacio");
    }
}
// Funcion para mostrar el pop-up del viñedo seleccionado
function mostrar(nombre){
    
    alert("HOLA! "+nombre);
    $('#'+nombre).css({opacity:1});
}