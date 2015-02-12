// Funcion para mostrar el mapa del centro de la region de lo vinos
function initialize() {
        var mapOptions = {
          center: new google.maps.LatLng(42.295872, -1.8187178),
          zoom: 8,
          mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map_canvas"),
            mapOptions);
      }