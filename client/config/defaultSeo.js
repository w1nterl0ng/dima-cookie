//You want the different routes in your website to have titles and meta tags for search engines & users.
//To create titles and meta tags that are set at server startup view the /server/config/seo.js file.
//In case no route specific titles & meta tags are set this default will be used.

Meteor.startup(function () {
  SEO.config({
    title: 'Project Title',
    meta: {
      'description': 'Project Title is a project about project subject.'
    }
  });
});
