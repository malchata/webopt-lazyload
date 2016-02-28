(function(document){
	"use strict";

	// Document objects
	var navIcon = document.getElementById("navIcon"),
	nav = document.getElementsByClassName("nav")[0];

	// Document events
	navIcon.addEventListener("click", function(){
		nav.classList.toggle("show");
	});

	// Scroll
	document.addEventListener("scroll", function(){
		if(document.getElementsByClassName("show").length > 0){
			nav.classList.remove("show");
		}
	});
})(document);