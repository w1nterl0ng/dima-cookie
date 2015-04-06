//An event that triggers when the user clicks the logout button. First he's logged out then send wherever with an iron:router route'

Template.logout.events({
  'click .logout': function () {
    Meteor.logout();
    Router.go('login');
  }
});