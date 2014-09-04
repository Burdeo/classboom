Template.signup.events({
  'submit #signupForm': function(e){
    e.preventDefault();
    var name = $('#signupForm [name="signupName"]').val();
    var type = $('#signupForm [name="signupType"]:checked').val();
    var email = $('#signupForm [name="signupEmail"]').val();
    var password = $('#signupForm [name="signupPassword"]').val();

    var user = { name: name.replace(/\b./g, function(m){ return m.toUpperCase(); }), type: type, email: email, password: password };

    console.log(user);
  }
});