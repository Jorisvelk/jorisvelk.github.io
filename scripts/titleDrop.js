var elmnt = document.getElementById("title");
var arrowButton = document.getElementById("arrow-container1");
var played = false;

arrowButton.addEventListener("click" , function() {easterEgg()} );
arrowButton.addEventListener("click" , function() {delay()} );

function delay() {
	if (played == false) {
	setTimeout(() => {  section2.scrollIntoView({behavior: "smooth", block: "start"}); }, 2000);
	played = true;
	} else {
		section2.scrollIntoView({behavior: "smooth", block: "start"});
	}
}

function easterEgg() {
		elmnt.style.transformOrigin = "top left";
		elmnt.style.animation = "hinge 1.8s ease-in-out 0s forwards";
		setTimeout(() => {  flavourText.style.opacity = "100%"; }, 2200);
		console.log("fml")
	}