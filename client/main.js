String.prototype.capitalize = function(lower) {
    return (lower ? this.toLowerCase() : this).replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
};

Handlebars.registerHelper('firstWord', function(str){
  return str.split(' ')[0];
});