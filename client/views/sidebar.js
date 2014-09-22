Template.sidebar.events({
  'click .class-switcher li.class': function(e){
    Session.set('currentClass', $(e.currentTarget).attr('data-class-id'));
  }
})