var button = document.getElementById("arrow-container1");
var button2 = document.getElementById("arrow-container2");
var header1 = document.getElementById("navItem1");
var header2 = document.getElementById("navItem2");
var header3 = document.getElementById("navItem3");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var sec2Title = document.getElementById("sec2Title");
var sec2Content = document.getElementById("sec2Content")

function trigger(aT, bT) {
	setTimeout(() => { animate(aT) }, 500);
	setTimeout(() => { animate(bT) }, 650);
	console.log(bT);
}

function animate(a) {
	a.style.opacity = "100%"
	a.style.transform = "translateY(0px)"
}

// button.addEventListener("click", function(){section2.scrollIntoView({behavior: "smooth", block: "start"})});
button.addEventListener("click", function(){trigger(sec2Title, sec2Content)});
header1.addEventListener("click", function(){section1.scrollIntoView({behavior: "smooth", block: "start"})});
button2.addEventListener("click", function(){section3.scrollIntoView({behavior: "smooth", block: "start"})});
header2.addEventListener("click", function(){trigger(sec2Title, sec2Content)});
header2.addEventListener("click", function(){section2.scrollIntoView({behavior: "smooth", block: "start"})});
header3.addEventListener("click", function(){section3.scrollIntoView({behavior: "smooth", block: "start"})});

