String.prototype.capitalize = function(lower) {
    return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

// Register Underscore helper
UI.registerHelper('_', function() {
  arguments = _.toArray(arguments);
  var self = this,
    fn = arguments[0];
  arguments.shift();
  arguments.pop();
  return _[fn].apply(self, arguments);
});

Handlebars.registerHelper('firstWord', function(str){
  return str.split(' ')[0];
});

Handlebars.registerHelper('userHasNoClasses', function(){
  if ( Meteor.user() && Meteor.user().profile.classes.length === 0 ) { return true; }
  return false;
});