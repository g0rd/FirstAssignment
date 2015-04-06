/**
 * @author Dee's
 */
	
	function populatePage(){
		for(var i = 0; i < guardianHeroinData.length; i++){
			var individualHeroinDatum = guardianHeroinData[i];
			var htmlInput = '<div class="quoteContainer"><div class="mainQuoteContainer">'+
					individualHeroinDatum.mainQuote
				+ '</div><div class="wholeQuoteContainer">' +
					individualHeroinDatum.wholeQuote
				+'</div><div class="personContainer">' +
					individualHeroinDatum.source
				+ '</div><div class="yearsCleanContainer">' +
					individualHeroinDatum.yearsClean
				+ '</div><div class="locationContainer">' +
					individualHeroinDatum.location
				+ '</div></div>';
				$('#dataContainer').append(htmlInput);
		}
		
	}
	
	function injectHTML(){
		populatePage();
	}