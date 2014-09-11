Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('timeline', {
    path: '/',
    onBeforeAction: function(){ Session.set('currentPage', 'timeline'); }
  });
  this.route('calendar', {
    path: '/calendar',
    onBeforeAction: function(){ Session.set('currentPage', 'calendar'); }
  });
  this.route('assignments', {
    path: '/assignments',
    onBeforeAction: function(){ Session.set('currentPage', 'assignments'); }
  })
});