
function send(){

  var userName = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var msg = document.getElementById('message').value;
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if(userName == ''){
    var confirmBox = $("#confirm");
      confirmBox.find(".msg").text('Invalid Username!!');
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


  else if(msg == ''){
    var confirmBox = $("#confirm");
      confirmBox.find(".msg").text('Invalid Message!!');
      confirmBox.find(".yes").unbind().click(function() {
         confirmBox.hide();
      });
      confirmBox.find(".yes").click();
      confirmBox.show();
  }


  else{
    firebase.firestore().collection("users-message").add({
      User_Name: userName,
      Email: email,
      Message: msg,
    })
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
    });
    console.log('Hello');
    Email.send({ 
      Host: "smtp.gmail.com", 
      Username: "wsmgarments@gmail.com", 
      Password: "garments786", 
      To: email, 
      From: "wsmgarments@gmail.com", 
      Subject: "Message", 
      Body: "WSM Garments reply you within one hour thankyou for your response!!!", 
    }) 
    .then(
      console.log("mail sent successfully")
    );
    document.getElementById('username').value = '';
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  }

}