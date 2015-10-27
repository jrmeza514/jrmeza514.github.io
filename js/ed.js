(function(){
	education = ko.observableArray();
	var educationList = [
		{
			school: 'West Valley College - Saratoga',
			degree: 'AA Web and Mobile Design',
			year: '2014 - Present',
			desc: 'This degree focusues on the design principles of Web and Mobile interfaces. I am still working on this'
			+ 'degree, but this does not hinder my ability to seek full-time employment',
			links: []
		},
		{
			school: 'Udacity - Online',
			degree: 'Frontend Developer Nanodegree',
			year: '2015',
			desc: 'This is a project based degree with a cutting edge curriculum designed by leading tech companies to meet their'
			+ 'needs. The achievement of this degree occurs uppon successful completion of all the required projects which must meet'
			+ 'series of standards: (Quality , functionality, implementation). It gives great understanding about the day-to-day life'
			+ 'of a frontend developer.',
			links: [
				{
					name: 'View Certificate',
					url: 'pdf/nanodegree/frontend/certificate.pdf',
					thumbnail: "img/frontend-thubmnail.png"
				}
			]
		}
	];
	education( educationList );
})();