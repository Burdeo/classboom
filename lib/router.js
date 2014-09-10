Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('timeline', {
    path: '/'
  });
  this.route('calendar', {
    path: '/calendar'
  })
});