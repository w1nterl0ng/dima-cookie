//Validate a callFromATemplateEvent and if so update a ACollection.
//
//We do this here in /lib so that both the server and client can make use of it. The server performs the actual
//update, but the client can use it to fake it with its client side mini mongo till it receives an update from server.
//This faking expected behaviour till it is sure makes Meteor seem so fast in the client.
//If you got for example proprietary algorithms you don't want send to the client keep those methods on only the server.


Meteor.methods({
  'callFromATemplateEvent': function (selectedDocId) {
    if (1 < 2) {
      ACollection.update(selectedDocId, {$inc: {score: 1}});
    }
  }
});