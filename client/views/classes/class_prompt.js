Template.classPrompt.rendered = function(){
  $('.cb-input-date').each(function(){
    var picker = new Pikaday({
      field: $(this)[0],
      format: 'DD MM YYYY'
      onSelect: function(date){
        // DO SOMETHING
      }
    });
  });
}