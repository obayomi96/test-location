function initMap() {
  
  const options = {
    center: {lat: 6.5244, lng: 3.3792},
    zoom: 8
  }

  // New map object
  const map = new google.maps.Map(document.getElementById('map'), options);

  // Listen for click on map
  google.maps.event.addListener(map, 'click', function(event){
    // Add marker
    addMarker({coords:event.latLng});
  });

  // Array of markers
  const markers = [
    {
      coords: {lat: 6.5244, lng: 3.3792},
      iconImage: 'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
      content: '<h1>Current location</h1>'
    },
    {
      coords: {lat: 7.1475, lng: 3.3619},
      content:'<h1>Abk, Ogun</h1>'
    },
    {
      coords: {lat: 6.6194, lng:  3.5105},
      content:'<h1>Ikorodu, lagos</h1>'
    }
  ];

  // Loop through markers
  for (let i = 0;i < markers.length;i++) {
    // Add marker
    addMarker(markers[i]);
  }

  // Add Marker Function
  function addMarker (props) {
    const marker = new google.maps.Marker({
      position:props.coords,
      map:map,
      //icon:props.iconImage
    });

    // Check for customicon
    if (props.iconImage) {
      // Set icon image
      marker.setIcon(props.iconImage);
    }

    // Check content
    if (props.content) {
      const infoWindow = new google.maps.InfoWindow({
        content:props.content
      });

      marker.addListener('click', function(){
        infoWindow.open(map, marker);
      });
    }
  }
}
