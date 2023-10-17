// Create a map using Leaflet
var myMap = L.map("map", {
    center: [37.09, -95.71], // Set the map center's latitude and longitude
    zoom: 4, // Set the initial zoom level
});

// Define base maps
var streetMap = L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
});

var satelliteMap = L.tileLayer("https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}", {
    maxZoom: 18,
    subdomains: ["mt0", "mt1", "mt2", "mt3"],
    attribution: 'Map data &copy; <a href="https://www.google.com/copyright">Google Maps</a> contributors',
});

// Create a base maps object to switch between base maps
var baseMaps = {
    "Street Map": streetMap,
    "Satellite Map": satelliteMap,
};

// Add a default base map layer to your map
streetMap.addTo(myMap);

// Use the URL of the USGS GeoJSON feed to fetch earthquake data
var earthquakeUrl = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson";
var tectonicPlateUrl = "https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_plates.json";

// Create an earthquake data layer
var earthquakeLayer = L.geoJSON(null, {
    pointToLayer: function (feature, latlng) {
        return L.circle(latlng, {
            radius: feature.properties.mag * 20000, // Adjust the size factor as needed
            fillColor: getColor(feature.geometry.coordinates[2]),
            color: "#000",
            weight: 1,
            opacity: 1,
            fillOpacity: 0.8
        }).bindPopup(`<strong>Location:</strong> ${feature.properties.place}<br><strong>Magnitude:</strong> ${feature.properties.mag}<br><strong>Depth:</strong> ${feature.geometry.coordinates[2]} km`);
    }
});

// Define the getColor function here
function getColor(depth) {
    if (depth > 90) return "#FF0000"; // Red, indicating the deepest earthquakes
    else if (depth > 70) return "#FF4500"; // Orange-Red, indicating moderately deep earthquakes
    else if (depth > 50) return "#FFA500"; // Orange-Yellow, indicating medium-depth earthquakes
    else if (depth > 30) return "#FFFF00"; // Yellow, indicating shallow-medium depth earthquakes
    else if (depth > 10) return "#00FF00"; // Green, indicating shallow earthquakes
    else return "#00FFFF"; // Cyan, indicating the shallowest earthquakes
}

// Create a tectonic plate data layer
var tectonicPlateLayer = L.geoJSON(null, {
    style: {
        color: "#FF5733", // Define the color of the tectonic plate lines
        weight: 2, // Define the line weight
    }
});

// Fetch earthquake data and add it to the map
d3.json(earthquakeUrl).then(function (earthquakeData) {
    earthquakeLayer.addData(earthquakeData);
});

// Fetch tectonic plate data and add it to the map
d3.json(tectonicPlateUrl).then(function (plateData) {
    tectonicPlateLayer.addData(plateData);
});

// Create overlay maps object
var overlayMaps = {
    "Earthquakes": earthquakeLayer,
    "Tectonic Plates": tectonicPlateLayer,
};

// Add layer controls to your map
L.control.layers(baseMaps, overlayMaps).addTo(myMap);

// Create a legend container for depth and color legends
var legends = L.control({ position: 'bottomleft' });
legends.onAdd = function (map) {
    var div = L.DomUtil.create('div', 'legends-container');
    div.innerHTML = '<div class="depth-legend-container">' + depthLegend.getContainer().innerHTML + '</div>' +
        '<div class="color-legend-container">' + colorLegend.getContainer().innerHTML + '</div>';
    return div;
};

legends.addTo(myMap);