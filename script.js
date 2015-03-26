/**
 * @author Rutwij Devashrayee
 * 
 */

// Load the Visualization API and the piechart package.
google.load('visualization', '1.0', {
	'packages' : ['corechart']
});

// Set a callback to run when the Google Visualization API is loaded.
google.setOnLoadCallback(drawChart);

// Input type: Date
// Return type: string 1920s, 1930s etc
function getDecade(someDate) {
	return someDate.toString().substring(0, 3) + "0s";
}

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

	// Create the data table.
	//data from http://www.census.gov/compendia/statab/2012/tables/12s0695.xls
	var data = google.visualization.arrayToDataTable([
		['Race', '2009', '2005'],	
		['White alone or in combination', 81272, 76327],	
		['White   alone', 81434, 76546],
		['White alone (Not Hispanic)', 86276, 81179],
		['Black alone or in combination', 53228, 48606],
		['Black alone',	52930, 48448],
		['Asian alone or in combination', 100562, 88120],
		['Asian   alone', 101097, 88372],
		['Hispanic', 54074, 48847]
	]);
	
	// Set chart options for two separate sizes of charts
	var options = {
		'title' : 'Median Income by Race',
		'width' : '90%',
		'height' : 600,
		'orientation' : 'horizontal',
		'animation':{ },
		'backgroundColor' : '#D3D347',
		'titleTextStyle' : { },
  		'titlePosition' : 'out',
  		'legend':{
			'position': 'none'
		},
		'hAxis' : { }
	};
		
	var chart = new google.visualization.BarChart(document.getElementById('columnchart_material'));

    chart.draw(data, options);
}

