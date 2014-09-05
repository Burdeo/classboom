Template.login.events({
  'submit #loginForm': function(e) {
    e.preventDefault();
    var email = $('#loginForm [name="loginEmail"]').val();
    var password = $('#loginForm [name="loginPassword"]').val();
    Meteor.loginWithPassword(email, password);
  }
})