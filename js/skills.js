(function(){
	skills = ko.observableArray();
	var skillList = [
		"HTML" , "CSS" , "JavaScript" , "Knockout.js",
		"Jasmine Testing", "Java", "PHP", "SQL", "Google API",
		"Android", "AJAX"
	];
	skills( skillList );
})();