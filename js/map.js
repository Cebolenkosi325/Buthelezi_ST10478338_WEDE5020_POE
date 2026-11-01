// map.js
// Shows the Sunrise Bakery places on a map (Leaflet and OpenStreetMap)

// the places where Sunrise Bakery sells (the numbers are the latitude and longitude)
const locations = [
    { name: "Sunrise Bakery, Main Shop", address: "123 Main Street, Centurion", lat: -25.8603, lng: 28.1894 },
    { name: "Sunrise Bakery, Irene Shop", address: "Irene Village, Centurion", lat: -25.8786, lng: 28.2112 },
    { name: "Saturday Market Stall", address: "Centurion Lake, Saturdays 7:00 AM to 12:00 PM", lat: -25.8412, lng: 28.1889 }
];

// make the map and show the area with all three places
const map = L.map("map").setView([-25.865, 28.195], 12);

// the map pictures come from OpenStreetMap
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// put a marker with a popup on each place
const markers = [];
for (let i = 0; i < locations.length; i++) {
    const marker = L.marker([locations[i].lat, locations[i].lng]).addTo(map);
    marker.bindPopup("<strong>" + locations[i].name + "</strong><br>" + locations[i].address);
    markers.push(marker);
}

// the buttons under the map use this function to move the map to one place
function goToLocation(number) {
    map.setView([locations[number].lat, locations[number].lng], 15);
    markers[number].openPopup();
}