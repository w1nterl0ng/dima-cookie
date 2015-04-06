//By publishing we decide which aDocument is available to clients that have subscriptions, see /lib/router.js.
//
Meteor.publish("aSubscription", function () {
  return ACollection.find();
});
