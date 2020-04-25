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
    placeName:
        '<div id="firstHeading">' + 'FIFE' + '</div>' + '<hr>' +
        '<div id="mainContent">' + '<b>Born:</b> 27 July 1915 – 17 Mar 1984' + '</div>' +
        '<div id="imageSize">' + '<hr><img src="assets/images/maps/jack-fairfield-baby.jpg" alt="Jack Fairfield Baby">',

    LatLng: [{
        lat: 56.2082078,
        lng: -3.1495175
    }],
    type: 'raoc'
},
{
    placeName:
        '<div id="firstHeading">' + 'GLASGOW' + '</div>' + '<hr>' +
        '<div id="mainContent">' + 'Jack Fairfield had been residing at, Onslow Drive, Dennistown, Glasgow, since the beginning of 1939, after being transferred by his employers, the Wemyss Coal Co. Ltd, East Wemyss in Fife, to their office at 116 Hope Street, Glasgow. He remembered hearing the announcement that ‘we were at war with Germany’, on Sunday 3rd September 1939. On the 16th March 1939 Jack was formally sworn into the Royal Army Ordnance Corps.' + '</div>' +
        '<div id="imageSize">' + '<hr><img src="assets/images/maps/ted-ada-norman-jack.jpg" alt="b. Ted Fairfield & Ada Fairfield (Webster) - Norman.Jack">',

    LatLng: [{
        lat: 55.864239,
        lng: -4.251806
    }],
    type: 'raoc'
},
{
    placeName:
        '<div id="firstHeading">' + 'CORSHAM' + '</div>' + '<hr>' +
        '<div id="mainContent">' + 'Promoted Corporal on 7th August 1940' + '</div>' +
        '<div id="imageSize">' + '<hr><img src="assets/images/maps/corporal.jpg" alt="Corporal Badge">',

    LatLng: [{
        lat: 51.431443,
        lng: -2.189674
    }],
    type: 'raoc'
},
{
    placeName:
        '<div id="firstHeading">' + 'BEDALE' + '</div>' + '<hr>' +
        '<div id="mainContent">' + 'Promoted Lance-Sergeant 15th October 1940' + '</div>' +
        '<div id="imageSize">' + '<hr><img src="assets/images/maps/sergeant-jack-fairfield.jpg" alt="Sergeant Jack Fairfield">',

    LatLng: [{
        lat: 54.2887008,
        lng: -1.5933179
    }],
    type: 'raoc'
},
{
    placeName:
        '<div id="firstHeading">' + 'ASCOT' + '</div>' + '<hr>' +
        '<div id="mainContent">' + 'Promoted Warrent Officer Class I, 18th November 1941' + '</div>' +
        '<div id="imageSize">' + '<hr><img src="assets/images/maps/warrent-officer-class-I.jpg" alt="Warrent Officer Class I Jack Fairfield">',

    LatLng: [{
        lat: 51.4062365,
        lng: -0.6755624
    }],
    type: 'raoc'
},
{
    placeName:
        '<div id="firstHeading">' + 'DERBY' + '</div>' + '<hr>' +
        '<div id="mainContent">' + 'Promoted 2nd Lieutenant, 5th September 1942' + '</div>' +
        '<div id="imageSize">' + '<hr><img src="assets/images/maps/lieutenant-jack-fairfield.jpg" alt="2nd Lieutenant Jack Fairfield">',
    LatLng: [{
        lat: 52.9225301,
        lng: -1.4746186
    }],
    type: 'raoc'
},
{
    placeName:
        '<div id="firstHeading">' + 'BIGGLESWADE' + '</div>' + '<hr>' +
        '<div id="mainContent">' + 'Promoted Captain, 5th April 1943 ' + '</div>' +
        '<div id="imageSize">' + '<hr><img src="assets/images/maps/captain-jack-fairfield.jpg" alt="Captain Jack Fairfield">',
    LatLng: [{
        lat: 52.086938,
        lng: -0.26422
    }],
    type: 'raoc'
},
{
    placeName:
        '<div id="firstHeading">' + 'LEVEN' + '</div>' + '<hr>' +
        '<div id="mainContent">' + 'Wedding – St Margaret’s Episcopal Church, Leven. 8th December 1942' + '</div>' +
        '<div id="imageSize">' + '<hr><img src="assets/images/maps/wedding.jpg" alt="Jack and Ella Wedding">',
    LatLng: [{
        lat: 56.19632,
        lng: -2.996578
    }],
    type: 'raoc'
},
{
    placeName:
        '<div id="firstHeading">' + 'THORTON' + '</div>' + '<hr>' +
        '<div id="mainContent">' + 'School House Thorton – ca. 1963/ 1964' + '</div>' +
        '<div id="imageSize">' + '<hr><img src="assets/images/maps/thorton.jpg" alt="Jack and Ella at School House Thorton">',
    LatLng: [{
        lat: 56.166325,
        lng: -3.146377
    }],
    type: 'raoc'
},
{
    placeName:
        '<div id="firstHeading">' + 'METHILHILL' + '</div>' + '<hr>' +
        '<div id="mainContent">' + 'Four Generations – Methilhil – 1947' + '</div>' +
        '<div id="imageSize">' + '<hr><img src="assets/images/maps/four-generations.jpg" alt="Henry, Ted, Jack, Sheena Fairfield">',
    LatLng: [{
        lat: 56.1872188,
        lng: -3.0387536
    }],
    type: 'raoc'
},
{
    placeName:
        '<div id="firstHeading">' + 'EDWINSTOWE' + '</div>' + '<hr>' +
        '<div id="mainContent">' + 'ca. May 1944' + '</div>' +
        '<div id="imageSize">' + '<hr><img src="assets/images/maps/edwinstowe.png" alt="Edwinstowe RAOC Regiment">',
    LatLng: [{
        lat: 53.196232,
        lng: -1.066758
    }],
    type: 'raoc'
},
{
    placeName:
        '<div id="firstHeading">' + 'ESINGWOLD' + '</div>' + '<hr>' +
        '<div id="mainContent">' + 'Highthorne House - ca. March 1946' + '</div>' +
        '<div id="imageSize">' + '<hr><img src="assets/images/maps/highthorne.jpg" alt="Highthorne House RAOC Regiment">',
    LatLng: [{
        lat: 54.1214408,
        lng: -1.191874
    }],
    type: 'raoc'
},
{
    placeName:
        '<div id="firstHeading">' + 'SOUTHAMPTON' + '</div>' + '<hr>' +
        '<div id="mainContent">' + 'The Llangibby Castle shortly after its return from Sword beach, Normandy, after dropping Canadian 3rd Division on D-Day. The ship can be seen covered in oil from sunken ships off the D-Day beaches in France. Scrambling nets to disembark troops can be seen hanging from the side of the vessel - 6 June 1944 28-Jun-44' + '</div>' +
        '<div id="imageSize">' + '<hr><img src="assets/images/maps/langibby-castle.jpg" alt="Langibby Castle">',
    LatLng: [{
        lat: 50.9097004,
        lng: -1.4043509
    }],
    type: 'raoc'
},

];

// Calling initMap function
window.onload = function () {
    initMap();
}

// Creates markers for locations
function addMarkerInfo() {
    for (let i = 0; i < markersOnMap.length; i++) {

        // Add placename to Info Window
        let contentString = markersOnMap[i].placeName;

        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            icon: icons[markersOnMap[i].type].icon,
            map: map
        });

        // Info Window for contentString
        const infowindow = new google.maps.InfoWindow({
            content: contentString,
        });

        marker.addListener('click', function () {
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
    addMarkerInfo();
}