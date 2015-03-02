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

	obs = fredData.observations;
	var arraysData = [];
	for (var i = 0; i < obs.length; i++) {
		var itemArray = [];
		
		//Creating variables in Number format for creating a date
		//This would come in handy if we want to sort the data by date in later stage
		var year = Number((obs[i].date).substring(0, 4));
		var month = Number((obs[i].date).substring(5, 7));
		var day = Number((obs[i].date).substring(8, 10));

		var date = new Date(year, month, day);
		var decade = getDecade(year)
	
		//Creating a 2D array for individual item
		itemArray.push(date);
		itemArray.push(Number(obs[i].value));
		itemArray.push(decade);
		
		//pushing the individual array into a larger array for data processing later
		arraysData.push(itemArray);
	}

	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('date', 'Date');
	data.addColumn('number', 'Value');
	data.addColumn('string', "Decade")
	data.addRows(arraysData);

	//Group data according to decades
	var groupedData = google.visualization.data.group(data, [2], [{
		'column' : 1,
		'aggregation' : google.visualization.data.sum,
		'type' : 'number'
	}]);

	// Set chart options for two separate sizes of charts
	var options_big = {
		'title' : 'Federal Reserves by Year',
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
	
	var options_small = {
		'title' : 'Federal Reserves by Decade',
		'width' : '90%',
		'height' : 300,
		'orientation' : 'horizontal',
		'backgroundColor' : '#D3D347',
		'titleTextStyle' : { },
  		'titlePosition' : 'out',
  		'legend':{
			'position': 'none'
		},
		'hAxis' : {
			'ticks' : ["1920s","1940s","1960s","1980s","2000s"]	//This seems to be nor working at the moment woud need to research it
				//[{v:"1920s", f:'1920s'}, 
				//{v:"1940s", f:'1940s'},
				// {v:"1960s", f:'1960s'},
				//{v:"1980s", f:'1980s'},
				//{v:"2000s", f:'2000s'}]
		}
	};
	
	options_small.titleTextStyle = titleTextStyle_small;
	
	//options_small.hAxis = hAxisStyle;
	// Instantiate and draw our chart, passing in some options.
	var smallChart = new google.visualization.BarChart(document.getElementById('chart_div_small'));
	smallChart.draw(groupedData, options_small);
	
	options_big.animation = animationStyle;
	options_big.titleTextStyle = titleTextStyle_big;
	options_big.hAxis = hAxisStyle;
	var bigChart = new google.visualization.BarChart(document.getElementById('chart_div_big'));
	data.removeColumn(2);
	bigChart.draw(data, options_big);
}

/*
 * Deprecated code borne out of experimneting
 * 
 * 
 * 
 *http://api.stlouisfed.org/fred/series/observations?series_id=GNPCA&api_key=abcdefghijklmnopqrstuvwxyz123456&file_type=json
 */
/*function httpGet(theUrl) {
 var rawFile = new XMLHttpRequest();
 rawFile.open("GET", theUrl, false);
 rawFile.onreadystatechange = function() {
 if (rawFile.readyState === 4) {
 if (rawFile.status === 200 || rawFile.status == 0) {
 var allText = rawFile.responseText;
 alert(allText);
 }
 }
 }
 rawFile.send(null);

 return rawFile.responseText;

 }
 var jsonData = new File([],"./jsonData.txt");
 var file = new FileReader();
 var jsonText = file.readAsText(jsonData);
 var final = file.result;
 var x = JSON.parse("./fredData.json");
 var obs = [];*/
