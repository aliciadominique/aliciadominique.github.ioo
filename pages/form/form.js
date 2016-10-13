//Submitting
function submitting(purchase){
	if(!purchase.tandc.checked){
		alert('You must agree to the terms first if you wish to proceed to purchase');
		return false;
	} else if (purchase.tandc.checked) {
		var fname=document.getElementById("fname").value;
		var lname=document.getElementById("lname").value;
		var email=document.getElementById("email").value;
		var phone=document.getElementById("phone").value;
		var address=document.getElementById("address").value;
		var booknum=document.getElementById("booknum").value;
		var books=document.getElementById("books").value;
		var radios = document.getElementsByName('rb');
		var gender;
		var updates=document.getElementById("updates").value;

		for (var i = 0, length = radios.length; i < length; i++) {
	    	if (radios[i].checked) {
	        	var gender=radios[i].value;
	        	break;
	    	}	
		}
		if(gender==="Male"){
			gender="Mr. ";
		} else if(gender==="Female"){
			gender="Ms. ";
		} else {
			gender="Mr/Ms. ";
		}
		var honor = gender + fname + " " + lname;

		var backup;
		var optional=document.getElementById("optional");
		var selected=optional.options[optional.selectedIndex].text;
		if(selected==="none"){
			backup="None";
		}else{
			backup=document.getElementById("backup").value;
		}

		var pay;
		var payment=document.getElementById("payment");
		var paym=payment.options[payment.selectedIndex].text;
		if(paym==="cod"){
			pay="Cash On Delivery";
		}else{
			pay=document.getElementById("ccn").value;
		}

		var note;
		if(!purchase.updates.checked){
			note="You wish to not receive updates through your e-mail.";
		} else {
			note="You wish to receive updates through your e-mail."
		}
		alert("Hello " + honor + "\n\n\ The following are your information: " + " \n\t E-mail: " + email + "\n\t Back-up E-mail Address: " + backup + "\n\t Contact: " + phone + "\n\t Delivery Address: " + address + "\n\n\ And this is your order: " + "\n\t Number of Book/s to Purchase: " + booknum + "\n\t Book/s to Purchase: " + books + "\n\t Payment Options: " + pay + "\n\n Note: " + note);
		check(obj);
		othercheck(obj);
	}
}
function check(obj){
	var backup = document.getElementById("backup");
	backup.disabled=obj.value=="none";
}
function othercheck(obj){
	var ccn = document.getElementById("ccn");
	ccn.disabled=obj.value=="cod";
}