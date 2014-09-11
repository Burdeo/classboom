Template.postCreator.events({
  'submit form#postCreator': function(e){
    e.preventDefault();

    var text = $('#postCreator [name="postText"]').val();

    Posts.insert({
      userId: Meteor.userId(), 
      classId: Session.get('currentClass'), 
      text: text
    });
  }
})