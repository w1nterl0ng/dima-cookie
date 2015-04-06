//Meta tags and titles that are set at server startup. In case a route is not set here the default configuration from
// /client/config/defaultSeo.js is used.

Meteor.startup(function () {
  SeoCollection.upsert({route_name: 'home'}, {
    route_name: 'home',
    title: 'Project Title | Welcome',
    meta: {'description': 'Project Title is a project about project subject.'}
  });
  SeoCollection.upsert({route_name: 'features'}, {
    route_name: 'features',
    title: 'Project Title | Features',
    meta: {'description': 'Look at all these amazing features Project Title has.'}
  });
  SeoCollection.upsert({route_name: 'about'}, {
    route_name: 'about',
    title: 'Project Title | About',
    meta: {'description': 'Read about how Project Title came to be.'}
  });
  SeoCollection.upsert({route_name: 'contact'}, {
    route_name: 'contact',
    title: 'Project Title | Contact',
    meta: {'description': 'Behold the plentiful ways to contact Project Title.'}
  });
  SeoCollection.upsert({route_name: 'profile'}, {
    route_name: 'profile',
    title: 'Project Title | Profile',
    meta: {'description': 'This is your Project Title profile page.'}
  });
  SeoCollection.upsert({route_name: 'logout'}, {
    route_name: 'logout',
    title: 'Project Title | Logout',
    meta: {'description': 'This is the Project Title logout page.'}
  });
  SeoCollection.upsert({route_name: 'login'}, {
    route_name: 'login',
    title: 'Project Title | Login & Register',
    meta: {'description': 'This is the Project Title login and register page.'}
  });
  SeoCollection.upsert({route_name: 'dashboard'}, {
    route_name: 'dashboard',
    title: 'Project Title | Dashboard',
    meta: {'description': 'This is the Project Title Dashboard.'}
  });
});

