# leaflet-challenge
This is the package for Module 15 chanllenge.

# USGS Earthquake Data Visualization

This project is a data visualization tool for earthquake data using Leaflet and D3.js. It utilizes earthquake data provided by the United States Geological Survey (USGS) to visualize earthquake events on a map, including their location, magnitude, and depth. The project also includes geographic data for tectonic plate boundaries to help users gain a better understanding of earthquake distribution.

## Getting Started

To get started with this project, follow these steps:

1. Clone the repository to your local machine.

2. Open the `index.html` file in a web browser to view the earthquake data visualization.

3. To get the detailed earthquake and technique plate information, please click the top right corner, to choose types of layers and inforamtion.

## Features

This earthquake data visualization tool includes the following features:

- Plotting the latest and updated earthquake events on the map, using different radii and colors to represent magnitude and depth.

- Displaying a legend to explain the meaning of earthquake event depth in different colors.

- Allowing users to switch between different basemap layers, including "Street Map" and "Satellite Map."

- Enabling users to toggle earthquake event layer and tectonic plate layer on and off in the layer control.

- Styling the tectonic plate layer with red lines to indicate boundaries.

## Data Sources

The earthquake data is sourced from the United States Geological Survey (USGS) and can be found at the following URL: [USGS Earthquake Data](https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson)

The tectonic plate geographic data is sourced from the following URL: [Tectonic Plate Data](https://raw.githubusercontent.com/fraxen/tectonicplates/master/GeoJSON/PB2002_plates.json)

## Dependencies

This project depends on the following libraries and technologies:

- Leaflet.js: Used for creating interactive maps.
- D3.js: Used for data visualization.
- USGS Earthquake Data: Used for fetching earthquake event data.
- Tectonic Plate Geographic Data: Used for drawing tectonic plate boundaries.

## Author

- Author: Mu Li
- Date: Oct 17, 2023

## Special Thanks

- Thanks to the United States Geological Survey (USGS) for providing earthquake data.

- Thanks to the Leaflet and D3.js communities for their powerful tools and documentation.
