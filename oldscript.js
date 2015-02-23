/**
 * @author Rutwij Devashrayee
 * 
 * Deprecated script for the previous assignment
 */
/*
 * Variables defined below illustrate my personal resume
 */
var name = "Rutwij Devashrayee";
var age = 25;
var jobs = ["Junior Developer, Ontario Financing Authority", "Test Developer, CaseWare International Inc."];
var skills = {
	data : ["Scraping", "Visuzalization", "JavaScript", "Multi-platform Programmin with languages like C#, Java, Python"],
	audioVisual : ["CS6 Suite", "Video Production and Editing", "Journalistic Photography"],
	language : ["English", "Hindi", "Urdu", "Gujarati"]
};

console.log("Name: " + name);
console.log("Age: " + age)
console.log("First Job: " + jobs[0]);
console.log(skills.data);

console.log(skills.audioVisual);
skills.audioVisual[3] = "Radio Production";
console.log(skills.audioVisual);

console.log("Age (as of 2016):" + (age + 1));

/*
 * Assignment 3 work
 *
 * Create a sortable and selectable photo slider data processors.
 *
 * The arrays photos and photos_2 are the photos residing in the img folder
 *
 */
var photos = [{
	name : "startrail",
	location : "algonquin, ontario"
}, {
	name : "a rasta carpenter",
	location : "new york, ny"
}, {
	name : "blind ascetic",
	location : "hrishikesh, india"
}, {
	name : "common rat snake",
	location : "gujarat, india"
}];

var photos_2 = [{
	name : "ganpati",
	location : "mumbai, india"
}, {
	name : "canals",
	location : "amsterdam, netherlands"
}, {
	name : "grand central",
	location : "new york, ny"
}, {
	name : "light buds",
	location : "new york, ny"
}];

/*
 * Get the name of the variable instead the value
 *
 * Important for using the variable names in console logs;
 *
 * for example, foo = 1; window_getVarName(foo) = foo
 *
 */
function window_getVarName(what) {
	for (var name in window) {
		if (window[name] == what)
			return (name);
	}
	return ("");
}

/*
 * Concatenates the image folder path and sorts the photos for photo slider.
 *
 * @param photoList: the list of photos with name and metadata (including location)
 */
function sortPhotos(photoList, location) {

	console.log(window_getVarName(photoList));
	var sortedPhotoList = [];

	for (var i = 0; i < photoList.length; i++) {
		var photo = photoList[i];

		if (String(photo.location).search(location) >= 0) {

			var photoPath = "./img/" + photo.name + ".jpg";
			sortedPhotoList.push(photoPath);

		} //end of if statement
	}//end of for loop

	console.log(sortedPhotoList);
	return sortedPhotoList;
};

var indiaPhotos = sortPhotos(photos, "india");
var nyPhotos = sortPhotos(photos_2, "ny");

/*
 * Assignment 4 work
 *
 */

var data = {
	observation : [ observation1 = {}]
}; 