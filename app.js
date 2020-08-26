








//Food Menu Tabs

// Get the element with id="defaultOpen" and click on it making it open
document.getElementById("defaultOpen").click();

function openMenu(event, menuName){
  // Declare all variables
  var i, tabContent, tabLinks;

  // Get all elements with class='tabContent' and hide them
  tabContent = document.getElementsByClassName('tabcontent')
  for (let i = 0; i < tabContent.length; i++) {
     tabContent[i].style.display= 'none';    
  }

   // Get all elements with class="tablinks" and remove the class "active"
   tabLinks = document.getElementsByClassName("tablinks");
   for (i = 0; i < tabLinks.length; i++) {
     tabLinks[i].className = tabLinks[i].className.replace(" active", "");
   }

  // Show current tab, and add an active class
  document.getElementById(menuName).style.display = 'block'  
  event.currentTarget.className += " active"
};


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
