/**
 * @author Rutwij Devashrayee
 */

var map = L.map('filmingLocationsMap').setView([40.714269, -74.005973], 13);

// add an OpenStreetMap tile layer
L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
	attribution : '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

//loop to put individual markers on the map
for (var i = 0; i < filmingLocations.length; i++) {
	var individualFilimingLocation = filmingLocations[i];
	var marker = L.marker([individualFilimingLocation.latitude, individualFilimingLocation.longitude]).addTo(map);
	marker.bindPopup("<b>" + individualFilimingLocation.film + "</b><br>" + individualFilimingLocation.neighborhood + "<br>" + individualFilimingLocation.borough );
} //end of for loop