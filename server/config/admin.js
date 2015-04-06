//Here we add the users and admins collections to houston so we can view them in localhost:3000/admins
// Don't forget to be first to go to yourWebsite.com/admin after deploying to claim your admin role

Houston.add_collection(Meteor.users);
Houston.add_collection(Houston._admins);
