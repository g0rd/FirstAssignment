/**
 * @author Dee's
 */
	var htmlInput = '';
	function populatePage(){
		for(var i = 0; i < guardianHeroinData.length; i++){
			var individualHeroinDatum = guardianHeroinData[i];
			htmlInput += '<div class="quoteContainer"><div class="mainQuoteContainer">'+
					individualHeroinDatum.mainQuote
				+ '</div><div class="wholeQuoteContainer">' +
					individualHeroinDatum.wholeQuote
				+'</div><div class="personContainer">'
					individualHeroinDatum.person
				+ '</div><div class="yearsCleanContainer">' +
					individualHeroinDatum.yearsClean
				+ '</div><div class="locationContainer">' +
					individualHeroinDatum.location
				+ '</div></div>';
		}
	}
	
	function injectHTML(){
		$(#dataContainer).append(htmlpInput);
	}