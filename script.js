//your JS code here. If required.
let fname= document.getElementById("fname");
let lname= document.getElementById("lname");
let phone = document.getElementById("pnum");
let email= document.getElementById("email");
let int = document.getElementById("btn");
console.log(fname)

int.addEventListener("click",function(){
alert("First Name :"+ fname.value+
	   "\n Last Name :"+ lname.value+
	    "\nPhone Number :"+ phone.value+
	 "\n Email ID :" +email.value)})