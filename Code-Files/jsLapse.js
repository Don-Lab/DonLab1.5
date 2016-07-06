//Javascript for lapse.html

//header
var day;
switch(new Date().getDay()) {
	case 0:
		day = "Sunday"
		break;

	case 1:
		day = "Monday"
		break;

	case 2:
		day = "Tuesday"
		break;

	case 3:
		day = "Wednesday"
		break;

	case 4:
		day = "Thursday"
		break;

	case 5:
		day = "Friday"
		break;

	case 6:
		day = "Saturday"
		break;
}
document.getElementById("header").innerHTML = "<center><h1>Welcome! Today is " + day + "</h1></center>";

//form validation
function validForm() {
	var user = document.forms["emailForm"]["user"].value;
	if (user == null || user == "") {
		alert("Need Name");
		return false;
	}

	var email = document.forms["emailForm"]["email"].value;
	if (email == null || email == "") {
		alert("Need Email");
		return false;
	}
}

//footer
var year = new Date().getFullYear();
document.getElementById("footer").innerHTML = "<center><h1>&copy;" + year + " Don Lab</h1></center>";
