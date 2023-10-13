function signin(){
   var email = document.getElementById('email').value;
   var password = document.getElementById('password').value;
   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;


   if(!(email.match(mailformat))){
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



      else{
         firebase.auth().signInWithEmailAndPassword(email, password)
         .then((userCredential) => {

           var user = userCredential.user;

           document.getElementById('email').value = '';
           document.getElementById('password').value = '';
           setTimeout(function(){location.replace('home.html') }, 100);
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

function signup(){
   location.replace('signup.html');
 }


function googleSignin() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth()

    .signInWithPopup(provider).then(function(result) {
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
      // ..
    });
 }


//  firebase.auth().onAuthStateChanged(function(user) {
//     if (user) {
//       console.log(user.displayName);
//       document.getElementById("demo").innerHTML = user.displayName;
//     } else {
//       // No user is signed in.
//       console.log("USER NOT LOGGED IN");
//     }
//   });