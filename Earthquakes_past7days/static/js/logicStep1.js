// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
// let map = L.map('mapid').setView([30, 30], 2);

// We create the tile layer that will be the background of our map.
let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// We create the dark view tile layer that will be an option for our map.
let satelliteStreets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    accessToken: API_KEY
});

// create a base layer to hold both maps
let baseMaps = {
    "Streets": streets,
    "Satellite": satelliteStreets
};

// create the map object w a center and zoom level
let map = L.map("mapid", {
    center: [39.5, -98.5],
    zoom: 3,
    layers: [streets]
});

// Pass our map layers into our layers control and add the layers control to the map.
L.control.layers(baseMaps).addTo(map);

d3.json("https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson").then(function(data){
    // creating a GeoJSON layer with the retireved data
    L.geoJSON(data).addTo(map);
});



// // accessing the Toronto airline routes GeoJSON URL
// let torontoData = "https://raw.githubusercontent.com/bwheeler98/Mapping_Earthquakes/main/torontoRoutes.json";

// // create a style for the lines
// let myStyle = {
//     color: "ffffa1",
//     weight: 2
// }

// //grabbing our GeoJSON data and adding info markers
// d3.json(torontoData).then(function(data){
//     console.log(data);
//     // creating a GeoJSON layer with the retrieved data
// // L.geoJSON(data).addTo(map);
// L.geoJSON(data, {
//     style: myStyle,
//     onEachFeature: function(feature, layer) {
//       layer.bindPopup("<h3> Airline: " + feature.properties.airline + "</h3><hr><h3> Destination: " + feature.properties.dst + "</h3>");
//     }
// })
// .addTo(map);
// });

// Then we add our 'graymap' tile layer to the map.
// streets.addTo(map);

// accessing the airport GeoJSON URL
// let airportData = "https://raw.githubusercontent.com/bwheeler98/Mapping_Earthquakes/main/majorAirports.json"

// // grabbing the GeoJSON data
// d3.json(airportData).then(function(data){
//     console.log(data);
//   // creating a geojson layer with the retrieved data
//   L.geoJSON(data).addTo(map);
// });



// add markers with airport name and code
// let featureList = airportData["Feature"];
// console.log(featureList);

// for (let i =0; i < airportData.length; i++){
//     console.log(airportData[i]);
// };


// // Add GeoJSON data.
// let sanFranAirport =
// {"type":"FeatureCollection","features":[{
//     "type":"Feature",
//     "properties":{
//         "id":"3469",
//         "name":"San Francisco International Airport",
//         "city":"San Francisco",
//         "country":"United States",
//         "faa":"SFO",
//         "icao":"KSFO",
//         "alt":"13",
//         "tz-offset":"-8",
//         "dst":"A",
//         "tz":"America/Los_Angeles"},
//         "geometry":{
//             "type":"Point",
//             "coordinates":[-122.375,37.61899948120117]}}
// ]};

// // Grabbing our GeoJSON data.
// L.geoJSON(sanFranAirport, {
//     onEachFeature: function(feature, layer){
//     console.log(layer);
//     layer.bindPopup();
//     }
// }).addTo(map);

// coordinates for each point to be used in the polyline
// let line = [
//   [33.9416, -118.4085],
//   [37.6213, -122.3790],
//   [40.7899, -111.9791],
//   [47.4502, -122.3088]
// ];

// // create a polyline using the line corrdinates and make the line red
// L.polyline(line, {
//   color: 'yellow'
// }).addTo(map);

// // get data from cities.js
// // let cityData = cities;

//Loop through the cities array and create one marker for each city.
// cityData.forEach(function(city) {
//   console.log(city)
//   L.circleMarker(city.location, {
//     radius: city.population/100000
//   })
//   .bindPopup("<h2>" + city.city + ", " + city.state + "</h2> <hr> <h3>Population " + city.population.toLocaleString() + "</h3>")
//  .addTo(map);
// });




