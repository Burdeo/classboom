// Register Underscore helper
UI.registerHelper('_', function() {
  arguments = _.toArray(arguments);
  var self = this,
    fn = arguments[0];
  arguments.shift();
  arguments.pop();
  return _[fn].apply(self, arguments);
});

UI.registerHelper('currentClass', function(){ return Session.get('currentClass'); });
UI.registerHelper('currentPage', function(){ return Session.get('currentPage'); });

// All my classes

UI.registerHelper('myClasses', function(){
  if ( Meteor.user() && Meteor.user().profile.classes.length > 0 ) {
    var classes = Meteor.user().profile.classes;
    classes.forEach(function(item, i){
      var thisClass = Classes.findOne({_id: item});
      classes[i] = thisClass;
    });
    return classes;
  }
});


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