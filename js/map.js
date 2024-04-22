function initMap() {
  // The location of Illinois Institute of Technology
  var iit = {lat: 41.8349, lng: -87.6270};
  // The map, centered at IIT
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 14, center: iit});
  // The marker, positioned at IIT
  var marker = new google.maps.Marker({position: iit, map: map});
}