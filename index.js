
// let map;

// function initMap() {
//     map = new google.maps.Map(document.getElementById('map-area'), {
//         zoom: 8,
//         scrollwheel: true,
//         center: {
//             lat: -34.397,
//             lng: 150.644
//         }
//     });
// }

// function pinLocation(lat, long, location) {
//     let marker = new google.maps.Marker({
//         position: {
//             lat: parseFloat(lat),
//             lng: parseFloat(long)
//         },
//         map: map,
//         title: location
//     });
//     map.setCenter(marker.getPosition());
//     map.setZoom(8);
// }

// const ipTrackBtn = document.getElementById('track-IP');

// ipTrackBtn.addEventListener('click', async () => {
//     const IPinput = document.getElementById('input-area').value;
    
//     fetch('https://ipapi.co/' + IPinput + '/json/')
//     .then((response) => response.json())
//     .then((data) => {
//         document.getElementById('ip-address').innerText = data.ip || 'N/A';
//         document.getElementById('location').innerText = `${data.city}, ${data.region}, ${data.country_code}` || 'N/A';
//         document.getElementById('timezone').innerText = data.timezone + ', ' + data.utc_offset || 'N/A';
//         document.getElementById('isp').innerText = data.org || 'N/A';


//         if (map) {
//             map = new google.maps.Map(document.getElementById('map-area'), {
//                 zoom: 4,
//                 scrollwheel: true,
//                 center: {
//                     lat: -34.397,
//                     lng: 150.644
//                 }
//             });
//         }

//         pinLocation(data.latitude, data.longitude, `${data.city}, ${data.region}, ${data.country_code}`, 'url(./images/icon-arrow.jpg)');
//     })
//     .catch((error) => {
//         console.error('Error fetching IP information:', error);

//     });
// });

let map;

function initMap() {
    map = new google.maps.Map(document.getElementById('map-area'), {
        zoom: 8,
        scrollwheel: true,
        center: {
            lat: -34.397,
            lng: 150.644
        }
    });
}

function pinLocation(lat, long, location, customMarkerIcon) {
    let marker = new google.maps.Marker({
        position: {
            lat: parseFloat(lat),
            lng: parseFloat(long)
        },
        map: map,
        title: location,
        icon: {
            url: customMarkerIcon,
            scaledSize: new google.maps.Size(50, 80) // Optional: You can set the size of the icon
        }
    });
    map.setCenter(marker.getPosition());
    map.setZoom(8);
}

const ipTrackBtn = document.getElementById('track-IP');

ipTrackBtn.addEventListener('click', async () => {
    const IPinput = document.getElementById('input-area').value;
    
    fetch('https://ipapi.co/' + IPinput + '/json/')
    .then((response) => response.json())
    .then((data) => {
        document.getElementById('ip-address').innerText = data.ip || 'N/A';
        document.getElementById('location').innerText = `${data.city}, ${data.region}, ${data.country_code}` || 'N/A';
        document.getElementById('timezone').innerText = data.timezone + ', ' + data.utc_offset || 'N/A';
        document.getElementById('isp').innerText = data.org || 'N/A';

        if (map) {
            map = new google.maps.Map(document.getElementById('map-area'), {
                zoom: 4,
                scrollwheel: true,
                center: {
                    lat: -34.397,
                    lng: 150.644
                }
            });
        }

        pinLocation(data.latitude, data.longitude, `${data.city}, ${data.region}, ${data.country_code}`, './images/icon-location.png');
    })
    .catch((error) => {
        console.error('Error fetching IP information:', error);
    });
});
