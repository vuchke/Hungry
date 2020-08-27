

// Map 
// Initialize and add the map
function initMap(){
  // The location of Uluru
  var subotica = {lat: 46.100158, lng: 19.664203};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 10, center: subotica});
  // The marker, positioned at subotica
  var marker = new google.maps.Marker({position: subotica, map: map});
}
