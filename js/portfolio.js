(function(){
	projects = ko.observableArray();
	var projectList = [
		{
			name: "Neighborhood Map",
			url: "http://jrmeza514.github.io/frontend-nanodegree-neighborhood-app/",
			img: "img/map.png",
			description: "The application consists of three main components: a Google Map, a Third Party API, and  a responsive design. The goal of this project was to add some of my favorite locations as markers on a Google Map. When the user clicks on the marker,  the most recent instagram posts using the hashtag for the corresponding location will load into the user interface. The images show as a horizontally-scrollable list of images at the bottom of the screen. Finally, all this content will  adapt and remain usable at various screen sizes. "
		},
		{
			name: "Arcade Game Clone",
			url: "http://jrmeza514.github.io/frontend-nanodegree-arcade-game/",
			img: "img/game.png",
			description: "The application consists of three main components: a Google Map, a Third Party API, and  a responsive design. The goal of this project was to add some of my favorite locations as markers on a Google Map. When the user clicks on the marker,  the most recent instagram posts using the hashtag for the corresponding location will load into the user interface. The images show as a horizontally-scrollable list of images at the bottom of the screen. Finally, all this content will  adapt and remain usable at various screen sizes. "
		},
		{
			name: "Web Optimizations",
			url: "http://jrmeza514.github.io/frontend-nanodegree-mobile-portfolio/",
			img: "img/optim.png",
			description: "The application consists of three main components: a Google Map, a Third Party API, and  a responsive design. The goal of this project was to add some of my favorite locations as markers on a Google Map. When the user clicks on the marker,  the most recent instagram posts using the hashtag for the corresponding location will load into the user interface. The images show as a horizontally-scrollable list of images at the bottom of the screen. Finally, all this content will  adapt and remain usable at various screen sizes. "
		},
		{
			name: "Interactive Unit Circle",
			url: "http://jrmeza514.github.io/trig-unit-circle/",
			img: "img/unit_circle.png",
			description: "This is an Interactive unit circle"
		},
		{
			name: "Unit Testing",
			url: "http://jrmeza514.github.io/frontend-nanodegree-feedreader/",
			img: "img/tests.png",
			description: "The application consists of three main components: a Google Map, a Third Party API, and  a responsive design. The goal of this project was to add some of my favorite locations as markers on a Google Map. When the user clicks on the marker,  the most recent instagram posts using the hashtag for the corresponding location will load into the user interface. The images show as a horizontally-scrollable list of images at the bottom of the screen. Finally, all this content will  adapt and remain usable at various screen sizes. "
		}
	];
	projects( projectList );
})();
