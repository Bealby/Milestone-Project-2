
// Marker Clustering: Jack Fairfield's locations of interest

let map;
let InfoObj = [];
let centerCords = {
    lat: 54.253850,
    lng: -3.119770
};

let icons = {
    raoc: {
        icon: 'assets/images/raoc.jpg'
    },
};

let markersOnMap = [
    {
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
];

window.onload = function () {
    initMap();
}

function addMarkerInfo() {
    for (let i = 0; i < markersOnMap.length; i++) {
        let contentString = 'Glasgow'
        const marker = new google.maps.Marker({
            position: markersOnMap[i].LatLng[0],
            icon: icons[markersOnMap[i].type].icon,
            map: map
        });
    }
}

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 5.6,
        center: centerCords
    });
    addMarkerInfo();
}















/*
// Fife - Birth
{
    LatLng: [{
        lat: 56.2082078,
        lng: -3.1495175
    }],
    type: 'raoc'
},

/* Glasgow
{
    LatLng: [{
        lat: 55.864239,
        lng: -4.251806
    }],
    type: 'raoc'
}
];
/*





/*
// Corsham
{
lat: 51.431443,
lng: -2.189674
},
// Bedale
{
lat: 54.2887008,
lng: -1.5933179
},
// Ascot
{
lat: 51.4062365,
lng: -0.6755624
},
// Derby
{
lat: 52.9225301,
lng: -1.4746186
},
//Biggleswade
{
lat: 52.086938,
lng: -0.26422
},
// Leven
{
lat: 56.19632,
lng: -2.996578
},
// Thornton
{
lat: 56.166325,
lng: -3.146377
},
// Methilhill
{
lat: 56.1872188,
lng: -3.0387536
},
// Edwinstowe
{
lat: 53.196232,
lng: -1.066758
},
// Esingwold
{
lat: 54.1214408,
lng: -1.191874
},
// Southampton
{
lat: 50.9097004,
lng: -1.4043509
},
]
*/