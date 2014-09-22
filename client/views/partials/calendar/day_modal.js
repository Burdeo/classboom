Template.dayModal.rendered = function(){
  $('#addEvent select').select2({
    placeholder: 'prueba, trabajo, disertación...',
    minimumResultsForSearch: 10
  });

  currentDayPicker = new Pikaday({ field: $('#currentDayPicker')[0], format: 'DD MM YYYY' });
  currentDayInputCheck = Deps.autorun(function(){
    var currentDay = Session.get('currentDay');
    var date = moment(currentDay, 'DD MM YYYY');
    $('#currentDayPicker').val(date.format('DD MM YYYY'));
    currentDayPicker.setMoment(date);
  });

  $(document).on('keydown.dayModal', function(e){
    console.log(e.which);
    // if ( $(':focus').length == 0 ) {
      if ( e.which == 37 ) {
        $('#previous-day').click();
      } else if ( e.which == 39 ) {
        $('#next-day').click();
      }
    // }
  })
}

Template.dayModal.destroyed = function(){
  $(document).off('keydown.dayModal');
  currentDayInputCheck.stop();
}

Template.dayModal.helpers({
  dayHasEvents: function(){
    if ( Session.get('currentClass') == 'all' && Events.find({dueDate: Session.get('currentDay')}).count() > 0 ) {
      return true;
    } else if ( Session.get('currentClass') != 'all' && Events.find({dueDate: Session.get('currentDay'), classId: Session.get('currentClass')}).count() > 0 ) {
      return true;
    }
    return false;
  },
  dayEvents: function(){
    if ( Session.get('currentClass') == 'all' ) {
      return Events.find({dueDate: Session.get('currentDay')});
    } else {
      return Events.find({dueDate: Session.get('currentDay'), classId: Session.get('currentClass')});
    }
  },
  sessionCurrentDay: function(){
    return Session.get('currentDay');
  },
  currentDay: function(){
    var currentDay = Session.get('currentDay');
    var date = moment(currentDay, 'DD MM YYYY');
    return {
      day: date.format('D'),
      month: date.format('MMMM'),
      year: date.format('YYYY')
    };
  }
})

Template.dayModal.events({
  'submit #addEvent': function(e){
    e.preventDefault();
    var data = {};
    data.title = $('#addEvent [name="eventTitle"]').val();
    data.description = $('#addEvent [name="eventDescription"]').val();
    data.classId = Session.get('currentClass');
    data.eventType = $('#addEvent #eventTypePicker .current-option').attr('data-event-type');
    data.dueDate = Session.get('currentDay');
    
    Events.insert(data);
  },
  'click #eventTypePicker .dropdown-menu li': function(e){
    var type = $(e.currentTarget).attr('data-event-type');
    $('#eventTypePicker button').removeClass('empty');
    $('#eventTypePicker button .current-option').attr('data-event-type', type).text($(e.currentTarget).text());
    $('#eventTypePicker .dropdown-menu li.active').removeClass('active');
    $(e.currentTarget).addClass('active');

  },
  'change #currentDayPicker': function(e){
    Session.set('currentDay', moment($('#currentDayPicker').val(), 'DD MM YYYY').format('DD MM YYYY'));
  },
  'click #previous-day': function(e){
    e.preventDefault();
    var currentDay = Session.get('currentDay');
    Session.set('currentDay', moment(currentDay, 'DD MM YYYY').subtract(1, 'days').format('DD MM YYYY'));
  },
  'click #next-day': function(e){
    e.preventDefault();
    var currentDay = Session.get('currentDay');
    Session.set('currentDay', moment(currentDay, 'DD MM YYYY').add(1, 'days').format('DD MM YYYY'));
  }
})