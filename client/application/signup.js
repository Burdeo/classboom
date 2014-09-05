Template.signup.destroyed = function(){
  console.log('bye signup');
  setTimeout(function(){
    if ( $('.modal.in').length == 0 ) {
      $('.modal-backdrop').fadeOut(300, function(){ $(this).remove(); });
    }
  }, 0);
}

Template.signup.events({
  'keyup #signupForm [name="signupName"]': function(){
    var nameValue = $('#signupForm [name="signupName"]').val().toLowerCase().capitalize();
    $('#signupForm [name="signupName"]').val(nameValue);
  },
  'submit #signupForm': function(e){
    e.preventDefault();
    var name = $('#signupForm [name="signupName"]').val();
    var type = $('#signupForm [name="signupType"]:checked').val();
    var email = $('#signupForm [name="signupEmail"]').val();
    var password = $('#signupForm [name="signupPassword"]').val();
    var confirmPassword = $('#signupForm [name="signupPasswordConfirm"]').val();

    if ( password != confirmPassword ) {
      alert('Passwords dont match.');
      return;
    }

    var user = { 
      email: email, 
      password: password,
      profile: {
        name: name, 
        userType: type,
        classes: []
      }
    };

    console.log(user);

    Accounts.createUser(user);

  }
});