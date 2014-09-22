Template.classPrompt.rendered = function(){
  $('.cb-input-date .input-text').each(function(){
    var picker = new Pikaday({
      field: $(this)[0],
      format: 'DD/MM/YYYY'
    });
  });
}

Template.classPrompt.events({
  'submit #createClass': function(e){
    e.preventDefault();
    var classTitle = $('#createClass [name="classTitle"]').val();
    var classStartDate = $('#createClass [name="classStartDate"]').val();
    var classEndDate = $('#createClass [name="classEndDate"]').val();

    var data = {
      title: classTitle,
      startDate: classStartDate,
      endDate: classEndDate
    }

    var classId = Classes.insert(data);

    var classes = Meteor.user().profile.classes;
    classes.push(classId);

    Meteor.users.update({_id: Meteor.userId()}, { $set: { 'profile.classes': classes } });

    if ( Router.current().path != '/' ) {
      Router.go('/');
    }
  }
});