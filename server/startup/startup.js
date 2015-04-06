//Checks when the server starts up if aCollection is empty and creates documents if it is.
//
Meteor.startup(function () {
  if (ACollection.find().count() === 0) {
    ACollection.insert({
      score : 3,
      name : 'Vim',
      date : new Date()
    });
    ACollection.insert({
      score : 6,
      name : 'Emacs',
      date : new Date()
    });
    ACollection.insert({
      score : 2,
      name : 'Sublime',
      date : new Date()
    });
    ACollection.insert({
      score : 9001,
      name : 'WebStorm',
      date : new Date()
    });
    ACollection.insert({
      score : 8,
      name : 'Notepad++',
      date : new Date()
    });
    ACollection.insert({
      score : 4,
      name : 'Atom',
      date : new Date()
    });
  }
});
