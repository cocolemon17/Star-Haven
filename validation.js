
	function validateform(){
	var fname = document.getElementById("first-name").value;
	var lname = document.getElementById("last-name").value;
	var phone = document.getElementById("phone").value;
	var email = document.getElementById("email").value;
	var errors = 0;

	if(fname===""){
	document.getElementById("fnameerror").innerHTML="<b>ENTER FIRST NAME</b>";
	errors=1;
	}
	
	if(lname===""){
	document.getElementById("lnameerror").innerHTML="<b>ENTER LAST NAME</b>";
	errors=1;
	}

	if(email===""){
	document.getElementById("emailerror").innerHTML="<b>ENTER EMAIL</b>";
	errors=1;
	}

	if(phone===""){
	document.getElementById("phoneerror").innerHTML="<b>ENTER PHONE NUMBER</b>";
	errors=1;
	}
	
	if(errors===1){
	return false;}

	}
