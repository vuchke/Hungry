// // animations
// const faders = document.querySelectorAll(".fade-in");
// const sliders = document.querySelectorAll('.slide-in')
const animates = document.querySelectorAll('.animate')
const appearOptions = {
  threshold: 0,
  rootMargin: '0px 0px -350px 0px'

};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      return
    } else {
      entry.target.classList.add('appear')
      appearOnScroll.unobserve(entry.target)
    }
  });
}, appearOptions);

animates.forEach(animate => {
  appearOnScroll.observe(animate)
})

// faders.forEach(fader => {
//   appearOnScroll.observe(fader)
// })
// sliders.forEach(slider => {
//   appearOnScroll.observe(slider)
// })


// Map
// Initialize and add the map
function initMap() {
  // The location of Uluru
  var subotica = { lat: 46.100158, lng: 19.664203 };
  // The map, centered at Uluru
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: subotica,
  });
  // The marker, positioned at subotica
  var marker = new google.maps.Marker({ position: subotica, map: map });
}
