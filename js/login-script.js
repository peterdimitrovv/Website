function showMessage(){
	var username=document.getElementById("username").value;
	var password=document.getElementById("password").value;

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
}