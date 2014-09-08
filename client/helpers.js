// Register Underscore helper
UI.registerHelper('_', function() {
  arguments = _.toArray(arguments);
  var self = this,
    fn = arguments[0];
  arguments.shift();
  arguments.pop();
  return _[fn].apply(self, arguments);
});

UI.registerHelper('currentClass', function(){
  return Session.get('currentClass');
})

// Get a session variable from template
UI.registerHelper('getSession', function(v){ return Session.get(v); });

// Get the first word of a string
UI.registerHelper('firstWord', function(str){
  return str.split(' ')[0];
});

// Return true if the user has no classes (eg. just signed up)
UI.registerHelper('userHasNoClasses', function(){
  if ( Meteor.user() && Meteor.user().profile.classes.length === 0 ) { return true; }
  return false;
});