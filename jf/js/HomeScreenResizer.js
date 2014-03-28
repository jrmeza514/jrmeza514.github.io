 // JavaScript Document
 $( document ).ready(function(e) {
     (function(){
		var resize = function(){
			var headerElement = document.getElementById("home-section");
			var w = window.innerWidth;
			var h = w * 0.6;
			if( h > window.innerHeight){
				h = window.innerHeight;
			}
			headerElement.style.height = h + "px";
			//headerElement.style.width = w + "px";
		}
		window.addEventListener("resize", resize, false);
		resize();
 })();
});
        