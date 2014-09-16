Classes = new Meteor.Collection('classes');  // Cursos
Events = new Meteor.Collection('events');  // Actividades calendarizadas
Posts = new Meteor.Collection('posts');  // Publicaciones
Assignments = new Meteor.Collection('assignments');  // Tareas
Files = new Meteor.Collection('files');  // Archivos

idToClassId = function(cid){
  var id = cid.split('');
  console.log(id);
  var numbers = [];
  id.forEach(function(c, i){
    if ( parseInt(c).toString() == c ) {
      numbers.push(c);
      id[i] = '';
    }
  });
  id = id.join('').toUpperCase();
  numbers = numbers.join('')+Math.floor(Math.random()*100000).toString();

  return id.substring(0,3)+'-'+numbers.substring(0,3);
}

Classes.after.insert(function(userId, doc){
  Classes.update({_id: this._id}, { $set: { classCode: idToClassId(this._id), classColor: classColors[Math.floor(Math.random()*classColors.length)] } });
});

Classes.after.remove(function(userId, doc){
  var user = Meteor.users.findOne({ 'profile.classes': { $in: [doc._id] } });
  var classes = user.profile.classes;
  var index = classes.indexOf(doc._id);
  classes.splice(index, 1);
  Meteor.users.update({_id: user._id}, { $set: { 'profile.classes': classes } });
});

Posts.before.insert(function(userId, doc){
  doc.createdAt = Date.now();
})