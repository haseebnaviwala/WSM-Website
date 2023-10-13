
function signup(){
    var firstName = document.getElementById('first').value;
    var lastName = document.getElementById('last').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // console.log(password.length);
    
    
    if(firstName == ''){
      var confirmBox = $("#confirm");
        confirmBox.find(".msg").text('Invalid First Name!!');
        confirmBox.find(".yes").unbind().click(function() {
           confirmBox.hide();
        });
        confirmBox.find(".yes").click();
        confirmBox.show();
    }


    else if(lastName == ''){
      var confirmBox = $("#confirm");
        confirmBox.find(".msg").text('Invalid Last Name!!');
        confirmBox.find(".yes").unbind().click(function() {
           confirmBox.hide();
        });
        confirmBox.find(".yes").click();
        confirmBox.show();
    }
    
    else if(!(email.match(mailformat))){
      var confirmBox = $("#confirm");
        confirmBox.find(".msg").text('Invalid Email!!');
        confirmBox.find(".yes").unbind().click(function() {
           confirmBox.hide();
        });
        confirmBox.find(".yes").click();
        confirmBox.show();
    }


    else if(password == ''){
        var confirmBox = $("#confirm");
          confirmBox.find(".msg").text('Invalid Password!!');
          confirmBox.find(".yes").unbind().click(function() {
             confirmBox.hide();
          });
          confirmBox.find(".yes").click();
          confirmBox.show();
      }

    else if(password.length <= 8){
        var confirmBox = $("#confirm");
          confirmBox.find(".msg").text('8 characters required!!');
          confirmBox.find(".yes").unbind().click(function() {
             confirmBox.hide();
          });
          confirmBox.find(".yes").click();
          confirmBox.show();
      }
  
  
    else{
        firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
           
          var user = userCredential.user;
          
          document.getElementById('email').value = '';
          document.getElementById('password').value = '';
          document.getElementById('first').value = '';
          document.getElementById('last').value = '';
          

          var user1 = firebase.auth().currentUser;
          user1.updateProfile({
            displayName: firstName + ' ' + lastName,
          }).then(function() {
            console.log(user1);
            user1.sendEmailVerification().then(function() {
                console.log('email sent!!')
                setTimeout(function(){location.replace('home.html') }, 100);
            }).catch(function(error) {
              var errorCode = error.code;
              var errorMessage = error.message;
              // console.log(error);
              var confirmBox = $("#confirm");
              confirmBox.find(".msg").text(errorCode);
              confirmBox.find(".yes").unbind().click(function() {
                confirmBox.hide();
              });
              confirmBox.find(".yes").click();
              confirmBox.show();
            });
          }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            // console.log(error);
            var confirmBox = $("#confirm");
            confirmBox.find(".msg").text(errorCode);
            confirmBox.find(".yes").unbind().click(function() {
               confirmBox.hide();
            });
            confirmBox.find(".yes").click();
            confirmBox.show();
          });
        })
        .catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          // console.log(error);
          var confirmBox = $("#confirm");
          confirmBox.find(".msg").text(errorCode);
          confirmBox.find(".yes").unbind().click(function() {
             confirmBox.hide();
          });
          confirmBox.find(".yes").click();
          confirmBox.show();
          // ..
        });
      
    }
  
  }

  function signin(){
    location.replace('signin.html');
  }