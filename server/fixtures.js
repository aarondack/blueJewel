if (Posts.find().count() === 0) {

	Posts.insert( {
		title: 'Musings on life',
		author: 'Aaron Dack',
		url: 'http://aarondack.com'
	});

	Posts.insert( {
		title: 'Too many pancakes on the stack',
		author: 'Alyssa Tabarini',
		url: 'http://cslab.utexas.edu'
	});

	Posts.insert( {
		title: 'Cat in the Hat',
		author: 'Alex Catanzaro',
		url: 'http://facebook.com'
	});

}