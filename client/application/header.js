Template.header.helpers({
  currentClass: function(){
    var thisClass = Classes.findOne({_id: Session.get('currentClass')});
    if ( thisClass ) { return thisClass; }
    return false;
  }
});

Template.header.events({
  'click #logout': function(){
    Meteor.logout();
  }
});