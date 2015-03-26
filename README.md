
'title' : 'Median Income by Race',

Serif Title in big fonts to differentiate the title from the chart text. 

'titleTextStyle' : { 
	'fontName' : 'Cambria',
	'fontSize' : 24
},

'titlePosition' : 'out',

Using the bootstrap io, the chart is inside the middle 10 buckets.
To center it on the page the width and height are chosen as 90% and 600px
'width' : '90%',

'height' : 600,

As per Wong, the readability of the axis text is better in these format because
we do not have to slant them or put them in two rows.
'orientation' : 'vertical',
		

Keeping with the theme of the website I chose to not have a white background for the chart.
This way the chart seems like embedded part of the site. Thus, the negative space does not have a break.
	
'backgroundColor' : '#D3D347',


These are complementary colors to the background color for the bars. They are low saturation colors.
Also, I have chosen the same hued, different tinted colors to not create stark color contrasts between the two bars.
'colors': ["#d38d47","#936231"],

Legend is important to distinguish the two years. They are to the right top corner for easy readability. 
'legend':{
	'position': 'right'
},
		
I had to force the minimum value of 0 as per Wong. 
'hAxis' : {minValue: 0}