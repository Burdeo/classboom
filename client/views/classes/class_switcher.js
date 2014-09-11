Template.classSwitcher.events({
  'click #classSwitcher ul.classes-list li': function(e){
    Session.set('currentClass', $(e.currentTarget).attr('data-class-id'));
    $('#classSwitcher').modal('hide');
  }
});