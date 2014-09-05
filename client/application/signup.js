Template.signup.events({
  'submit #signupForm': function(e){
    e.preventDefault();
    var name = $('#signupForm [name="signupName"]').val().capitalize();
    var type = $('#signupForm [name="signupType"]:checked').val();
    var email = $('#signupForm [name="signupEmail"]').val();
    var password = $('#signupForm [name="signupPassword"]').val();
    var confirmPassword = $('#signupForm [name="signupPasswordConfirm"]').val();

    if ( password != confirmPassword ) {
      alert('Passwords dont match.');
      return;
    }

    var user = { name: name, type: type, email: email, password: password };

    Accounts.createUser({email: email, password: password, profile: { name: name, userType: type }});
  }
});