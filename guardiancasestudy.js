/**
 * @author Dee's
 */
	
	function populatePage(){
		for(var i = 0; i < guardianHeroinData.length; i++){
			var individualHeroinDatum = guardianHeroinData[i];
			var htmlInput = 
			$('<div class="quoteContainer">'
				+ '<div class="mainQuoteContainer"><p>'+ individualHeroinDatum.mainQuote + '</p></div>'
				+ '<div class="readMore">Read More</div>' 
				+ '<div class="moreInfo">'
					+ '<div class="wholeQuoteContainer">' + individualHeroinDatum.wholeQuote +'</div>'  
					+ '<div class="personContainer"> ' + individualHeroinDatum.source + ': <span> ' 
					+ individualHeroinDatum.yearsClean + '</span>, ' + individualHeroinDatum.location + '</div>'
				+ '</div>'
			+'</div>');
			
				
			$(htmlInput).find(".readMore").on("click", toggleContent);
		
			$('#dataContainer').append(htmlInput);
		}
	}
	
	
function toggleContent(e) {
	$quoteContainer = $(this).parent();
	if ($quoteContainer.hasClass("expanded")) {
		$quoteContainer.removeClass("expanded");
	} else {
		$quoteContainer.addClass("expanded");
	}
}

function appendHTML() {
	for(var i = 0; i < guardianHeroinData.length; i++){
		var individualHeroinDatum = guardianHeroinData[i];
		var htmlTemplate = '<div class="quoteContainer"><div class="mainQuoteContainer"><p></p></div><div class="wholeQuoteContainer"></div><div class="personContainer"> : <span></span>, </div></div>'
		
		$('#dataContainer').append(htmlTemplate);
		
		$('.mainQuoteContainer p').append(individualHeroinDatum.mainQuote); 
		$('.wholeQuoteContainer').append(individualHeroinDatum.wholeQuote) ;
		$('.personContainer').append(individualHeroinDatum.source);
		$('.personContainer span').append(individualHeroinDatum.yearsClean); 
		$('.personContainer span').after(individualHeroinDatum.location);
	}
}
	
function injectHTML(){
	populatePage();
	//appendHTML();
}