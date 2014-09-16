Template.calendar.rendered = function(){
  var d = new Date();
  Session.set('calendarMonth', d.getMonth()+1);
  Session.set('calendarYear', d.getFullYear());
}

Template.calendar.helpers({
  dayEvents: function(){
    return Events.find({dueDate: this.fullDay});
  },
  currentMonth: function(){
    var month = Session.get('calendarMonth');
    var year = Session.get('calendarYear');
    var monthString = '01 '+month+' '+year;

    var isCurrentMonth = false;
    var d = new Date();
    if ( month == d.getMonth()+1 ) {
      isCurrentMonth = true;
    }

    var response = {
      month: moment(monthString, 'DD MM YYYY').format('MMMM YYYY'),
      isCurrentMonth: isCurrentMonth
    };

    return response;
  },
  month: function(){
    var month = Session.get('calendarMonth');
    var year = Session.get('calendarYear');
    var monthString = '01 '+month+' '+year;

    var firstDay = moment(monthString, 'DD MM YYYY').day();
    var dayCount = moment(monthString, 'DD MM YYYY').endOf('month').date();

    if ( firstDay == 0 ) {
      firstDay = 6;
    } else {
      firstDay--;
    }

    var fillerArray = [];
    for (var i = 0; i < firstDay; i++) {
      fillerArray.push(i);
    };
   
    var fillerNextArray = [];
    var nextDays = (Math.ceil((dayCount+firstDay)/7)*7)-(dayCount+firstDay);
    for (var i = 0; i < nextDays; i++) {
      fillerNextArray.push({day: i+1});
    };

    var daysArray = [];
    for (var i = 0; i < dayCount; i++) {
      var dayString = (i+1).toString();
      if ( dayString.length == 1 ) { dayString = '0'+dayString; }

      var monthString = month.toString();
      if ( monthString.length == 1 ) { monthString = '0'+monthString; }

      var isToday = false;
      if ( dayString == moment().format('D') && month == moment().format('M') ) { isToday = true; }

      daysArray.push({day: dayString, fullDay: dayString+' '+monthString+' '+year, isToday: isToday});
    };
    
    return {
      pastDays: fillerArray,
      nextDays: fillerNextArray,
      days: daysArray
    }
  }
});

Template.calendar.events({
  'click .days-container .day[data-day]': function(e){
    Session.set('currentDay', $(e.currentTarget).attr('data-day'));
    $('#dayModal').modal('show');
  },
  'click #next-month': function(){
    var month = Session.get('calendarMonth');
    var year = Session.get('calendarYear');
    var newMonth = month+1;
    var newYear = year;
    if ( newMonth == 13 ) {
      newMonth = 1;
      newYear = year + 1;
    }
    Session.set('calendarMonth', newMonth);
    Session.set('calendarYear', newYear);
  },
  'click #prev-month': function(){
    var month = Session.get('calendarMonth');
    var year = Session.get('calendarYear');
    var newMonth = month-1;
    var newYear = year;
    if ( newMonth == 0 ) {
      newMonth = 12;
      newYear = year - 1;
    }
    Session.set('calendarMonth', newMonth);
    Session.set('calendarYear', newYear);
  }
})