function showMessage() {
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var message=document.getElementById("message").value;
    var subject=document.getElementById("subject").value;
    var messageName, messageMail, messageMessage, messageSub;
    var emailRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

    if (name == "") {
        messageName = "Please set your name!";
    } else if (name.length<3 || name.length>20 ) {
        messageName="Please enter a name between 3 and 20 characters!";
    } else if (!isNaN(name)) {
        messageName="Please use only letters";
    }
    else {
        messageName = "";
    }
    document.getElementById("MessageName").innerHTML = messageName;

    if (email=="") {
    	messageMail="Please enter your email!";
    } else if(emailRegEx.test(email) == false) {
        alert('Invalid Email Address');
        return false;
    } else{
        messageMail="";
    }
    document.getElementById("messageEmail").innerHTML = messageMail;

   if (message=="") {
    messageMessage="Please input your message!";
   } else if(message.length<50){
    messageMessage="Your message must contain at least 50 characters!"
   } else{
    messageMessage="";
   }
   document.getElementById("MessageMess").innerHTML=messageMessage;

   if (subject=="") {
    messageSub="Please choose an option!";
   } else{
   messageSub="";
   }
   document.getElementById("messageSubject").innerHTML=messageSub;
}