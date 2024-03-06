window.onload = function () {
  // Initialize the map
  var map = L.map('map').setView([51.4945, -0.1749], 13);

  // Load and display tile layer on the map
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);

  // Function to change the map location
  function changeLocation(lat, lng) {
      map.flyTo([lat, lng], 13);
  }

  // Add event listeners to links
  document.querySelectorAll('.location-link').forEach(function(link) {
      link.addEventListener('click', function(e) {
          e.preventDefault();
          var lat = this.getAttribute('data-lat');
          var lng = this.getAttribute('data-lng');
          changeLocation(lat, lng);
      });
  });
}