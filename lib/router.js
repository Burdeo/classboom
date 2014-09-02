Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('calendar', {
    path: '/'
  });
});