(function(){
	skills = ko.observableArray();
	var skillList = [
		"Mongo" , "Express" , "React/Redux" , "Node",
		"SQL", "Git" 
	];
	skills( skillList );
})();