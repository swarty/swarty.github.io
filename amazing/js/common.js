// menu fix
var navbar = document.getElementById("logo");
var sticky = navbar.offsetTop;

function myFunction() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky")
	} else {
		navbar.style.display = "block";
	}
}

// slider
var slideIndex = 1;
showDivs(slideIndex);

function currentDiv(n) {
	showDivs(slideIndex = n);
}

function showDivs(n) {
	var i;
	var x = document.getElementsByClassName("article_slides");
	var dots = document.getElementsByClassName("field");
	if (n > x.length) {slideIndex = 1}    
		if (n < 1) {slideIndex = x.length}
			for (i = 0; i < x.length; i++) {
				x[i].style.display = "none";  
			}
			for (i = 0; i < dots.length; i++) {
				dots[i].className = dots[i].className.replace(" slider_select", "");
			}
			x[slideIndex-1].style.display = "block";  
			dots[slideIndex-1].className += " slider_select";
}
