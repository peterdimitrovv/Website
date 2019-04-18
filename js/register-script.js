function showMessage(){
	var firstName=document.getElementById("firstName").value;
	var lastName=document.getElementById("lastName").value;
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;
	var repeatPassword=document.getElementById("repeatPassword").value;
	var birthday=document.getElementById("birthday").value;
	var gender=document.getElementById("gender").value;
	var mobilePhone=document.getElementById("mobilePhone").value;
	var email=document.getElementById("email").value;
    var specialValidate=document.getElementById("validation").value;
	var messageFName, messageLName, messageUName, messagePass, messageRepeatPass,
     messageBirth, messageGen, messagePhone, messageMail, messageValidate;
    var phoneRegEx = /08[789]\d{7}/;
    var emailRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    var ValidateRegEx=  /[-!$%^&*()_+|~=`{}[:;<>?,.@#\]]/g;

if (firstName=="") {
	messageFName="Please set your first name!";
} else if (!isNaN(firstName)) {
    messageFName="Please enter only letters for the first name!";
} else if (firstName.length<3 || firstName.length>20) {
    messageFName="Please enter a first name between 3 and 20 characters!";
} 
else{
	messageFName="";
}
document.getElementById("messageFirstname").innerHTML=messageFName;

if (lastName=="") {
    messageLName="Please set your last name!";
} else if (!isNaN(lastName)) {
    messageLName="Please enter only letters for the last name!";
} else if (lastName.length<3 || lastName>20) {
    messageLName="Please enter a last name between 3 and 20 characters!";
}else{
    messageLName="";
}
document.getElementById("messageLastname").innerHTML=messageLName;


if (username=="") {
    messageUName="Please set your username!";
} else if (!isNaN(username)) {
    messageUName="Please enter at least 3 letters, before using numbers"
}
else if (username.length<4 || username.length>15) {
    messageUName="Please enter an username between 4 and 15 characters!";
} else{
    messageUName="";
}
document.getElementById("messageUsername").innerHTML=messageUName;

if (password=="") {
    messagePass="Please set a password!";
} else if (password.length<8 || password.length>16) {
    messagePass="Please enter a password between 8 and 16!";
} else{
    messagePass="";
}
document.getElementById("messagePassword").innerHTML=messagePass;

if (password!=repeatPassword) {
    messageRepeatPass="The passwords are not equal!Please try again!";
} else{
    messageRepeatPass="";
}
document.getElementById("messageRepeatPassword").innerHTML=messageRepeatPass;

if (birthday=="") {
    messageBirth="Please choose a birthday date!";
} else{
    messageBirth="";
}
document.getElementById("messageBirthday").innerHTML=messageBirth;

if (gender=="") {
    messageGen="Please choose gender!";
} else{
    messageGen="";
}
document.getElementById("messageGender").innerHTML=messageGen;

if (mobilePhone=="") {
    messagePhone="Please enter your phone number!";
} else if (mobilePhone.length!=10) {
    messagePhone="Please enter a valid phone number of 10 digits";
} else if(phoneRegEx.test(mobilePhone)==false) {
    alert('Invalid phone number!');
} else{
    messagePhone="";
}
document.getElementById("messageMobilePhone").innerHTML=messagePhone;

if (email=="") {
    messageMail="Please enter your email!";
} else if (emailRegEx.test(email) == false) {
        alert('Invalid Email Address');
        return false;
} else{
    messageMail="";
}
document.getElementById("messageEmail").innerHTML=messageMail;

if (ValidateRegEx.test(specialValidate)) {
    messageValidate="It can contains only characters and numbers";
  }
  else{
    messageValidate="Everything is ok"
  }
  document.getElementById("messageValidation").innerHTML=messageValidate;

}