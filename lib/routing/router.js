//Here we configure iron:router

Router.configure({
  //standard layout all views use
  layoutTemplate: 'layout',
  //the page shown when some goes to a route we haven't defined
  notFoundTemplate: '404',
  //You can also set your iron-router-progress bar settings here
  progressSpinner: false
});

//With this we prevent people getting to routes we don't want them to see without being logged in.'
Router.onBeforeAction(function () {
    //check if it's a logged in user
    if (!Meteor.userId()) {
      //if they aren't redirect them to login
      this.render('login');
    } else {
      //if they are let them through
      this.next();
    }
  },
  //the routes we want this if logged in check for
  {only: ['dashboard', 'profile', 'logout']});

//Here we define all the routes for our templates in /client/views
//Notice layout is missing as that's a layout for all template
// Also the different templates for dashboard don't need their own routes.
Router.route('/', {
  //name for a route which we can use in templates
  name: 'home',
  //which template we want to use for this route
  template: 'home',
  //meteorhacks:fast-render setting to let a user render the html for a page without there already being a ddp connection
  fastRender: true
});

Router.route('/features', {
  name: 'features',
  template: 'features',
  fastRender: true
});

Router.route('/about', {
  name: 'about',
  template: 'about',
  fastRender: true
});

Router.route('/dashboard', {
  name: 'dashboard',
  template: 'dashboard',
//to use data in a template we need to subscribe to a publication, see /server/publications/publications.js
  subscriptions: function () {
    Meteor.subscribe('aSubscription');
  },
  fastRender: true
});

Router.route('/contact', {
  name: 'contact',
  template: 'contact',
  fastRender: true
});

Router.route('/profile', {
  name: 'profile',
  template: 'profile',
  fastRender: true
});

Router.route('/logout', {
  name: 'logout',
  template: "logout",
  fastRender: true
});

Router.route('/login', {
  name: 'login',
  template: "login",
  fastRender: true
});
