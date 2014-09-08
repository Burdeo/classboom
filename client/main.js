String.prototype.capitalize = function(lower) {
    return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

Meteor.startup(function(){
  if ( !Session.get('currentClass') ) {
    Session.set('currentClass', 'all');
  }
});