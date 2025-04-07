			function validateform(){
			var name = document.getElementById("name").value;
			var email = document.getElementById("email").value;
			var phone = document.getElementById("phone").value;
			var address = document.getElementById("address").value;
			var card = document.getElementById("card-number").value;
			var date = document.getElementById("expiry-date").value;
			var cvv = document.getElementById("cvv").value;
			var errors=0;
		
			if(name===""){
			document.getElementById("nameerror").innerHTML="*REQUIRED";
			errors=1;}

			if(email===""){
			document.getElementById("emailerror").innerHTML="*REQUIRED";
			errors=1;}

			if(phone===""){
			document.getElementById("phoneerror").innerHTML="*REQUIRED";
			errors=1;}

			if(address===""){
			document.getElementById("addresserror").innerHTML="*REQUIRED";
			errors=1;}

			if(card===""){
			document.getElementById("cardnumbererror").innerHTML="*REQUIRED";
			errors=1;}

			if(date===""){
			document.getElementById("dateerror").innerHTML="*REQUIRED";
			errors=1;}

			if(cvv===""){
			document.getElementById("cvverror").innerHTML="*REQUIRED";
			errors=1;}

			if(errors===1){
			return false;}


		}
