// Mobile Navigation in the Header Section Starts Here 
function closenav() {
	document.getElementById('navi').style.display = 'none';
}

function opennav() {
	document.getElementById('navi').style.display = 'flex';
}

// This Javascript code is for the Scroll to Top Button
// If the scrolling of the page is up to 50px, this function will make the "display" of the "bck-to-top" button "block" 
//(i.e It will Change it from "display: none" to "display: block")

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
	if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
		document.getElementById("bck-to-top-id").style.display = "block";
	} else {
		document.getElementById("bck-to-top-id").style.display = "none";
	}
}

// If you click the button, this function will returm you back to top of the page

function topFunction() {
	document.documentElement.scrollTop = 0; // This line is for Chrome and other compatible ones... Maybe Opera, Firefox, MS Edge etc...
	document.body.scrollTop = 0;     // This Line is Particularly for Safari Browser
}

// Navbar Dropdown Section - 2 Functions Below


//This function for Profile
function toggleProDisplay() {
	var div = document.getElementById("nav-down");
	if (div.style.display === "none" || div.style.display === "") {
		div.style.display = "flex";
	} else {
		div.style.display = "none";
	}

	document.getElementById("affilate").style.display = "none";

};


//This function for Affilations
function toggleAffDisplay() {
	var div = document.getElementById("affilate");
	if (div.style.display === "none" || div.style.display === "") {
		div.style.display = "flex";
	} else {
		div.style.display = "none";
	}

	document.getElementById("nav-down").style.display = "none";

};

// This variable called for copyright date
var d = new Date();
	document.getElementById("yyear").innerHTML = d.getFullYear();


// Accordion Section Script Starts Here

var accordion = document.getElementsByClassName("shell");
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var inner = this.nextElementSibling;
        if (inner.style.display === "block") {
            inner.style.display = "none";
        } else {
            inner.style.display = "block";
        }
    });
}

// Accordion Section Script Ends Here