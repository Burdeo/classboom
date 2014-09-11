Template.timelineSidebar.events({
  'click .classes-list li': function(e){
    Session.set('currentClass', $(e.currentTarget).attr('data-class-id'));
  }
})