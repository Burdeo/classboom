Template.header.events({
  'click #logout': function(){
    Meteor.logout();
  },
  'click #classSwitcher li': function(e){
    Session.set('currentClass', $(e.currentTarget).attr('data-class-id'));
    $('#classSwitcher').modal('hide');
  }
});