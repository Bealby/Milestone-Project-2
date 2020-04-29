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
        icon: 'assets/images/icon/flag.png'
    },
};

// Locations of interest for map. Set with Lat and Lang along with Marker
let markersOnMap = [{
        placeName: '<div id="firstHeading">FIFE</div><hr>' +
            '<div id="mainContent">"I was born on the 27 July, 1915. Kirkcaldy, Fife. My Father was Edward Fairfield, born 2 June, 1893. A Coal Miner and Storeman. My Mother, Ada Elizabeth née Webster, was born 12 January 1889."</div>' +
            '<div id="imageSize"><hr><img src="assets/images/maps/jack-fairfield-baby.jpg" alt="Jack Fairfield Baby">',

        LatLng: [{
            lat: 56.2082078,
            lng: -3.1495175
        }],
        type: 'raoc'
    },
    {
        placeName: '<div id="firstHeading">GLASGOW</div><hr>' +
            '<div id="mainContent">"The announcement that we were at war with Germany was made on Sunday 3rd September 1939. I heard the news over the radio at 11 a.m. in my lodgings in Onslow Drive, Dennistown, Glasgow. Having made up my mind to join one of the services and being in a very restless mood I offered my services to the army."</div>' +
            '<div id="imageSize"><hr><img src="assets/images/maps/ted-ada-norman-jack.jpg" alt="b. Ted Fairfield & Ada Fairfield (Webster) - Norman.Jack">',

        LatLng: [{
            lat: 55.864239,
            lng: -4.251806
        }],
        type: 'raoc'
    },
    {
        placeName: '<div id="firstHeading">CORSHAM</div><hr>' +
            '<div id="mainContent">"We moved from Colchester to a camp in Corsham, Wiltshire. Once again the huts were full and we were put into tents. There was an underground mine at this camp in which thousands of tons of ammunition were stored. We were sent to work loading and off loading ammunition. I was in a gang of six loading trains. We used to boast that we could load a truck quicker than any other gang ~ and I think we could! I was promoted to Corporal on 7 August 1940"</div>' +
            '<div id="imageSize"><hr><img src="assets/images/maps/corporal.jpg" alt="Corporal Badge">',

        LatLng: [{
            lat: 51.431443,
            lng: -2.189674
        }],
        type: 'raoc'
    },
    {
        placeName: '<div id="firstHeading">BEDALE</div><hr>' +
            '<div id="mainContent">"A farm track from the main road led to our site and also to the farm nearby. A guard had always to be posted at the entrance. There was a bull in the field on the other side of the track and a favourite play of the guard was to infuriate the bull just before he came off duty. The new guard was then forced to face this angry bull with only a flimsy gate to protect him! The farmer discovered this and I had to put a stop to this bit of fun, much to the relief of those on guard duty.I was promoted to Lance-Sergeant on 15 October 1940"</div>' +
            '<div id="imageSize"><hr><img src="assets/images/maps/sergeant-jack-fairfield.jpg" alt="Sergeant Jack Fairfield">',

        LatLng: [{
            lat: 54.2887008,
            lng: -1.5933179
        }],
        type: 'raoc'
    },
    {
        placeName: '<div id="firstHeading">ASCOT</div><hr>' +
            '<div id="mainContent">"It was not all work however. There was some kind of social life. In the evenings we used to walk to one of the many pubs in the area ~ in Ascot, Sunnyhill and Sunnydale. We played a lot of cards in the Sergeants Mess ~ mostly pontoon or brag. I remember that once we played the whole night through and our game only stopped when we heard reveille  in the morning. I was promoted to Warrent Officer Class I, on 18 November 1941"</div>' +
            '<div id="imageSize"><hr><img src="assets/images/maps/warrent-officer-class-I.jpg" alt="Warrent Officer Class I Jack Fairfield">',

        LatLng: [{
            lat: 51.4062365,
            lng: -0.6755624
        }],
        type: 'raoc'
    },
    {
        placeName: '<div id="firstHeading">DERBY</div><hr>' +
            '<div id="mainContent">"We occasionally went into Derby for a night out. Four of us went one night for dinner in one of the best hotels in town. I was 26 years old and had never been out to dinner before in a hotel. The others were quite blaze about it and I pretended that it was almost an everyday occurrence. I was promoted 2nd Lieutenant, on 5 September 1942"</div>' +
            '<div id="imageSize"><hr><img src="assets/images/maps/lieutenant-jack-fairfield.jpg" alt="2nd Lieutenant Jack Fairfield">',
        LatLng: [{
            lat: 52.9225301,
            lng: -1.4746186
        }],
        type: 'raoc'
    },
    {
        placeName: '<div id="firstHeading">BIGGLESWADE</div><hr>' +
            '<div id="mainContent">"By late summer, No.12 BAD at Biggleswade was pretty well established. We were now at full strength and in future there was to be little movement of officers or men. All in all it was a fairly harmonious unit. There was always a little bit of friendly and sometimes unfriendly rivalry but the old bitterness and acrimony that had existed in its early days had now gone. I was promoted Captain, on 5 April 1943"</div>',
        LatLng: [{
            lat: 52.086938,
            lng: -0.26422
        }],
        type: 'raoc'
    },
    {
        placeName: '<div id="firstHeading">LEVEN</div><hr>' +
            '<div id="mainContent">"Plans for our wedding went ahead and the date was fixed ~ 5th December 1942. In October we were faced with a crisis at home. Small pox had broken out in my village of Methilhill and the area was out of bounds to all those in the forces. We weren’t too worried at first but we began to worry when fresh cases broke out. The area would be out of bounds for a few weeks after the last reported case. We married at St Margaret’s Episcopal Church, Leven, on 8 December 1942"</div>' +
            '<div id="imageSize"><hr><img src="assets/images/maps/wedding.jpg" alt="Jack and Ella Wedding">',
        LatLng: [{
            lat: 56.19632,
            lng: -2.996578
        }],
        type: 'raoc'
    },
    {
        placeName: '<div id="firstHeading">THORTON</div><hr>' +
            '<div id="mainContent">"After the war Ella and I worked as school teachers at School House Thorton, Thornton. – ca. 1963/ 1964"</div>' +
            '<div id="imageSize"><hr><img src="assets/images/maps/thorton.jpg" alt="Jack and Ella at School House Thorton">',
        LatLng: [{
            lat: 56.166325,
            lng: -3.146377
        }],
        type: 'raoc'
    },
    {
        placeName: '<div id="firstHeading">METHILHILL</div><hr>' +
            '<div id="mainContent">"Four Generations! From let to right. Grandad, Henry. Father Edward. Myself and daughter, Sheena. Methilhil – 1947"</div>' +
            '<div id="imageSize"><hr><img src="assets/images/maps/four-generations.jpg" alt="Henry, Ted, Jack, Sheena Fairfield">',
        LatLng: [{
            lat: 56.1872188,
            lng: -3.0387536
        }],
        type: 'raoc'
    },
    {
        placeName: '<div id="firstHeading">EDWINSTOWE</div><hr>' +
            '<div id="mainContent">"On 6th June 1944 we heard that a landing had been made in Normandy, France. What were we doing in Edwinstowe? We were expecting something as leave had been cancelled and we were in a state of readiness. Within 48 hours we were on the move. ca. May 1944"</div>' +
            '<div id="imageSize"><hr><img src="assets/images/maps/edwinstowe.png" alt="Edwinstowe RAOC Regiment">',
        LatLng: [{
            lat: 53.196232,
            lng: -1.066758
        }],
        type: 'raoc'
    },
    {
        placeName: '<div id="firstHeading">ESINGWOLD</div><hr>' +
            '<div id="mainContent">"I was posted to 33 Ammunition Sub Depot with headquarters at Highthorne House near Easingwold in Yorkshire and I reported there at the end of my leave. This was a new unit and had not yet received its first train load of ammunition. The commanding officer was Lieutenant Ball and the second in command was Major Johnstone. Highthorne House - ca. March 1946"</div>' +
            '<div id="imageSize"><hr><img src="assets/images/maps/highthorne.jpg" alt="Highthorne House RAOC Regiment">',
        LatLng: [{
            lat: 54.1214408,
            lng: -1.191874
        }],
        type: 'raoc'
    },
    {
        placeName: '<div id="firstHeading">SOUTHAMPTON</div><hr>' +
            '<div id="mainContent">"The Llangibby Castle shortly after its return from Sword beach, Normandy, after dropping Canadian 3rd Division on D-Day. The ship can be seen covered in oil from sunken ships off the D-Day beaches in France. Scrambling nets to disembark troops can be seen hanging from the side of the vessel - 6 June 1944 28-Jun-44. We embarked on the same ship on the 28 June, 1944"</div>' +
            '<div id="imageSize"><hr><img src="assets/images/maps/langibby-castle.jpg" alt="Langibby Castle">',
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
};

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
        zoom: 5.8,
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

    // Generage Marker per item in markersOnMap
    let markers = markersOnMap.map(function(location, i) {
        let marker = new google.maps.Marker({
            position: location.LatLng[0],
            icon: icons[location.type].icon,
        }); 

        // Info Window for contentString
        let infoWindow = new google.maps.InfoWindow();

        google.maps.event.addListener(marker, "click", function() {
            closeOtherInfo();
            infoWindow.setContent(location.placeName);
            infoWindow.open(map, marker);
            InfoObj[0] = infoWindow;
        });
        return marker;
    });

    let markerCluster = new MarkerClusterer(map, markers, {
        imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'
    });

}




$(document).ready(function () {
  $(".navbar-nav li a").click(function(event) {
    $(".navbar-collapse").collapse('hide');
  });
});