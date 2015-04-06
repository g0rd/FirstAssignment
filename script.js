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


// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

	// Create the data table.
	//data from http://www.census.gov/compendia/statab/2012/tables/12s0695.xls
	//I did not separate out the data because it is a relatively small dataset.
	var data = google.visualization.arrayToDataTable([
		['Race', '2009', '2005'],	
		['White +', 81272, 76327],	
		['White', 81434, 76546],
		['Non Hispanic White', 86276, 81179],
		['Black +', 53228, 48606],
		['Black',	52930, 48448],
		['Asian +', 100562, 88120],
		['Asian', 101097, 88372],
		['Hispanic', 54074, 48847]
		//['Average', 78538, 73304]	//want to add the trendline for each year
	]);
	
	// Set chart options
	var options = {
		'title' : 'Median Income by Race',
		'width' : '90%',
		'height' : 600,
		'orientation' : 'vertical',
		'backgroundColor' : '#D3D347',
		'titleTextStyle' : { 
			'fontName' : 'Cambria',
			'fontSize' : 24
		},
  		'titlePosition' : 'out',
  		'colors': ["#d38d47","#936231"],
  		'legend':{
			'position': 'right'
		},
		'hAxis' : {minValue: 0}
		//'seriesType': 'bars', //Wanted to create a average reference line but could not figure it out. 
		//'series': {7: {type: 'line'}}
	};
		
	var chart = new google.visualization.BarChart(document.getElementById('columnchart_material'));

    chart.draw(data, options);
}




				





