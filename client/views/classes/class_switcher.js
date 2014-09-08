Template.classSwitcher.helpers({
  myClasses: function(){
    if ( Meteor.user() && Meteor.user().profile.classes.length > 0 ) {
      var classes = Meteor.user().profile.classes;
      classes.forEach(function(item, i){
        var thisClass = Classes.findOne({_id: item});
        classes[i] = thisClass;
      });
      return classes;
    }
  }
});

Template.classSwitcher.events({
  'click #classSwitcher ul.classes-list li': function(e){
    Session.set('currentClass', $(e.target).attr('data-class-id'));
    $('#classSwitcher').modal('hide');
  }
});