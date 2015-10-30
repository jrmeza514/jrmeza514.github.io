(function(){
	education = ko.observableArray();
	var educationList = [
		{
			school: 'West Valley College - Saratoga',
			degree: 'AA Web and Mobile Design',
			year: '2014 - Present',
			desc: 'This degree focuses on the design principles of Web and Mobile interfaces. With courses on elements of design, software design \
			tools and programming, this degree offers  the knowledge necessary to design beautiful and effective websites.Though I intend to primarily \
			be a programmer, having good design foundations will make me more versatile and prove useful in the long run.'
			,
			links: []
		},
		{
			school: 'Udacity - Online',
			degree: 'Frontend Developer Nanodegree',
			year: '2015',
			desc: 'This is a project-based degree with a cutting edge curriculum designed by leading tech companie. We learn all the fundamental web \
			technologies and work on projects to learn the basics. Aside from basic technologies, we learn to use the tools and processes that developers \
			use to ensure the quality of their work: Chrome Developer Tools, Version Control, and Unit Testing. This program really focuses on getting \
			students ready to join the competitive market that is software development.'
			,
			links: [
				{
					name: 'View Certificate',
					url: 'pdf/nanodegree/frontend/certificate.pdf',
					thumbnail: 'img/frontend-thubmnail.png'
				}
			]
		}
	];
	education( educationList );
})();