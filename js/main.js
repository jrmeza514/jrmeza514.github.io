/*
	Ensure page has fully loaded before applying
	bindings
*/
$(document).ready(function(){
	ko.applyBindings();
	$("#toggle").click( function(){
		$("nav").toggleClass("toggled");
	});
	$("header a").click(function(){
		$("nav").removeClass("toggled");
	});
	$(window).resize(function(){
		$("nav").removeClass("toggled");
	});
});