
// Funcion para mostrar el pop-up del viñedo seleccionado
function mostrar(nombre){
    $('.bodegas').css({opacity:0});
    $('#'+nombre).css({opacity:1});
}
function ocultar(nombre){
    alert("KK!");
    $('.bodegas').css({opacity:0});
    $('#'+nombre).css({opacity:0});
}