//Javascript file for Don Lab 1.5

//Form Validation
function validForm() {
	var name = document.forms["contact"]["Name"].value;
	if (name == null || name == "") {
		alert("Missing \"Name\"");
		return false;
	}
		
	var email = document.forms["contact"]["Email"].value;
	if (email == null || email == "") {
		alert("Missing \"Email\"");
		return false;
	}
	
	var mes = document.forms["contact"]["Content"].value;
	if (mes == null || mes == "") {
		alert("You need to tell me what you want on your website");
		return false;
	}
}

//Footer
var footerYear = new Date().getFullYear();
document.getElementById("footer").innerHTML = "<center><h3>&copy;" + footerYear + " Don Lab</h3> <h5><em>Version 1.5.0</em></h5></center>";
