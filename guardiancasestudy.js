/**
 * @author Dee's
 */
	
	function populatePage(){
		for(var i = 0; i < guardianHeroinData.length; i++){
			var individualHeroinDatum = guardianHeroinData[i];
			var htmlInput = '<div class="quoteContainer"><div class="mainQuoteContainer"><p>'+
					individualHeroinDatum.mainQuote
				+ '</p></div><div class="wholeQuoteContainer">' +
					individualHeroinDatum.wholeQuote
				+'</div><div class="personContainer"> ' +
					individualHeroinDatum.source + ': <span> ' + individualHeroinDatum.yearsClean + '</span>, ' + individualHeroinDatum.location
				+ '</div></div>';
				$('#dataContainer').append(htmlInput);
		}
		
	}
	
	function injectHTML(){
		populatePage();
	}