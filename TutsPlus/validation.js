// JavaScript source code
function validateForm() {
	var n = document.forms["contactForm"]["name"].value;
	var e = document.forms["contactForm"]["email"].value;
	var eReg = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	var err = document.getElementById("errorMsg");
	var errName = document.getElementById("errorName");
	var Email = document.getElementById("email");


	if (n == null || n == "") {
		errName.innerHTML = "Name must be filled out";
		err.innerHTML = "Email must be filled out";
		return false;
	} else if (e == null || e == "") {
		err.innerHTML = "Email must be filled out";
		return false;

	} else if (!eReg.test(e)) {
		alert("Enter a valid email address!");
		return false;
	} else
		err.innerHTML = "";
		errName.innerHTML = "";

}