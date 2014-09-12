Template.timeline.helpers({
  posts: function(){
    if ( Session.get('currentClass') == 'all' ){
      var classes = Meteor.user().profile.classes;
      return Posts.find({classId: { $in: classes }}, { sort: { createdAt: -1 } });
    } else {
      return Posts.find({classId: Session.get('currentClass')}, { sort: { createdAt: -1 } });
    }
  }
})