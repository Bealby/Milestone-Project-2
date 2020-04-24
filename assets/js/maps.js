// Variables set for initial map on main.html

let map;
let InfoObj = [];
let centerCords = {
  lat: 54.253850,
  lng: -3.119770
};

// Custom Marker for Google Maps
let icons = {
  raoc: {
    icon: 'assets/images/raoc.jpg'
  },
};

// Locations of interest for map. Set with Lat and Lang along with Marker
let markersOnMap = [{
    placeName: 'Fife',
    LatLng: [{
      lat: 56.2082078,
      lng: -3.1495175
    }],
    type: 'raoc'
  },
  {
    placeName: 'Glasgow',
    LatLng: [{
      lat: 55.864239,
      lng: -4.251806
    }],
    type: 'raoc'
  },
  {
    placeName: 'Corsham',
    LatLng: [{
      lat: 51.431443,
      lng: -2.189674
    }],
    type: 'raoc'
  },
  {
    placeName: 'Bedale',
    LatLng: [{
      lat: 54.2887008,
      lng: -1.5933179
    }],
    type: 'raoc'
  },
  {
    placeName: 'Ascot',
    LatLng: [{
      lat: 51.4062365,
      lng: -0.6755624
    }],
    type: 'raoc'
  },
  {
    placeName: 'Derby',
    LatLng: [{
      lat: 52.9225301,
      lng: -1.4746186
    }],
    type: 'raoc'
  },
  {
    placeName: 'Biggleswade',
    LatLng: [{
      lat: 52.086938,
      lng: -0.26422
    }],
    type: 'raoc'
  },
  {
    placeName: 'Leven',
    LatLng: [{
      lat: 56.19632,
      lng: -2.996578
    }],
    type: 'raoc'
  },
  {
    placeName: 'Thornton',
    LatLng: [{
      lat: 56.166325,
      lng: -3.146377
    }],
    type: 'raoc'
  },
  {
    placeName: 'Methilhill',
    LatLng: [{
      lat: 56.1872188,
      lng: -3.0387536
    }],
    type: 'raoc'
  },
  {
    placeName: 'Edminstowe',
    LatLng: [{
      lat: 53.196232,
      lng: -1.066758
    }],
    type: 'raoc'
  },
  {
    placeName: 'Esingwold',
    LatLng: [{
      lat: 54.1214408,
      lng: -1.191874
    }],
    type: 'raoc'
  },
  {
    placeName: 'Southampton',
    LatLng: [{
      lat: 50.9097004,
      lng: -1.4043509
    }],
    type: 'raoc'
  },

];

// Calling initMap function
window.onload = function() {
  initMap();
}

// Creates markers for locations
function addMarkerInfo() {
  for (let i = 0; i < markersOnMap.length; i++) {

    // Add placename to Info Window
    let contentString = '<h3>' + markersOnMap[i].placeName + '<h3>';

    const marker = new google.maps.Marker({
      position: markersOnMap[i].LatLng[0],
      icon: icons[markersOnMap[i].type].icon,
      map: map
    });

    // Info Window for contentString
    const infowindow = new google.maps.InfoWindow({
      content: contentString,
    });

    marker.addListener('click', function() {
      closeOtherInfo();
      infowindow.open(marker.get('map'), marker);
      InfoObj[0] = infowindow;
    });
  }
}

// Clear marker window information when clicking another marker
function closeOtherInfo() {
  if (InfoObj.length > 0) {
    InfoObj[0].set("marker", null);
    InfoObj[0].close();
    InfoObj[0].length = 0;
  }
}


// Map rendering from id="map" in main.html
function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 5.6,
    center: centerCords,
    styles:
      // Styling Map with RETRO theme
      [{
          "elementType": "geometry",
          "stylers": [{
            "color": "#ebe3cd"
          }]
        },
        {
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#523735"
          }]
        },
        {
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#f5f1e6"
          }]
        },
        {
          "featureType": "administrative",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#c9b2a6"
          }]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#dcd2be"
          }]
        },
        {
          "featureType": "administrative.land_parcel",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#ae9e90"
          }]
        },
        {
          "featureType": "landscape.natural",
          "elementType": "geometry",
          "stylers": [{
            "color": "#dfd2ae"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "geometry",
          "stylers": [{
            "color": "#dfd2ae"
          }]
        },
        {
          "featureType": "poi",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#93817c"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#a5b076"
          }]
        },
        {
          "featureType": "poi.park",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#447530"
          }]
        },
        {
          "featureType": "road",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f5f1e6"
          }]
        },
        {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [{
            "color": "#fdfcf8"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [{
            "color": "#f8c967"
          }]
        },
        {
          "featureType": "road.highway",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#e9bc62"
          }]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry",
          "stylers": [{
            "color": "#e98d58"
          }]
        },
        {
          "featureType": "road.highway.controlled_access",
          "elementType": "geometry.stroke",
          "stylers": [{
            "color": "#db8555"
          }]
        },
        {
          "featureType": "road.local",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#806b63"
          }]
        },
        {
          "featureType": "transit.line",
          "elementType": "geometry",
          "stylers": [{
            "color": "#dfd2ae"
          }]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#8f7d77"
          }]
        },
        {
          "featureType": "transit.line",
          "elementType": "labels.text.stroke",
          "stylers": [{
            "color": "#ebe3cd"
          }]
        },
        {
          "featureType": "transit.station",
          "elementType": "geometry",
          "stylers": [{
            "color": "#dfd2ae"
          }]
        },
        {
          "featureType": "water",
          "elementType": "geometry.fill",
          "stylers": [{
            "color": "#b9d3c2"
          }]
        },
        {
          "featureType": "water",
          "elementType": "labels.text.fill",
          "stylers": [{
            "color": "#92998d"
          }]
        }
      ]
  });
  addMarkerInfo();
}