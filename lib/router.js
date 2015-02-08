//Configure the initial router when website loads.
Router.configure({
	layoutTemplate: 'layout',
	loadingTemplate: 'loading',
	notFoundTemplate: 'notFound',
	waitOn: function() { return Meteor.subscribe('posts'); }
});

//Route the homepage to the postsList template which displays all the posts submitted.
Router.route('/', {name:'postsList'});

//Route to a specific post that has been submitted.
Router.route('/posts/:_id',
{name: 'postPage',
 data: function() {return Posts.findOne(this.params._id); }
});

Router.route('/submit', {name:'postSubmit'});

//Check for if the user is logged in. 
var requireLogin = function () {
	if (! Meteor.user())
		if (Meteor.logginIn())
			{
			this.render(this.loadingTemplate);
			}
			else
			{
			this.render('accessDenied');
			}
	else
	{
		this.next();
	}
};

Router.onBeforeAction('dataNotFound', {only: 'postPage'});
Router.onBeforeAction(requireLogin, {only: 'postSubmit'});



