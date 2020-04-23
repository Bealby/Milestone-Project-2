    function initMap() {
            let map = new google.maps.Map(document.getElementById("map"), {
                zoom: 5.6,
                center: {
                    lat: 54.253850,
                    lng: -3.119770,
                }
            });

            let labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

            let markers = locations.map(function(location, i) {
          return new google.maps.Marker({
            position: location,
            label: labels[i % labels.length]
          });
        });

        let markerCluster = new MarkerClusterer(map, markers,
            {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'});
      }

       let locations = [
        {lat: 56.2082078, lng: -3.1495175},
         {lat: 55.864239, lng: -4.251806},
          {lat: 51.431443, lng: -2.189674},
           {lat: 54.2887008, lng: -1.5933179},
        ]

        
            
        
        