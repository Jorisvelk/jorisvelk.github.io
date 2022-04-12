var toggleButton = document.getElementById("menuToggle");
var navVisible = false;
var section1 = document.getElementsByTagName('section') [0];


// Toggle nav on button press
function toggleNav() {
    if(navVisible == false) {
        document.getElementById("sideNav").style.width = "15%";
        navVisible = true;
    } else {
        document.getElementById("sideNav").style.width = "0";
        navVisible = false;
    }
}

//Scroll Functions
function scrollToSection0() {
    document.getElementsByTagName('section') [0].scrollIntoView({behavior: "smooth", block: "start"});
}

function scrollToSection1() {
    document.getElementsByTagName('section') [1].scrollIntoView({behavior: "smooth", block: "start"});
}

// Nav Scroll
document.getElementsByClassName("navItem") [0].addEventListener("click", scrollToSection0);
document.getElementsByClassName("navItem") [1].addEventListener("click", scrollToSection1);

// Button Scroll
document.getElementById("continue1").addEventListener("click", scrollToSection1);

toggleButton.addEventListener("click", toggleNav);


// Animate canvas on scroll
function moveCamera() {
    const t = document.body.getBoundingClientRect().top;
    console.log(t);

    document.getElementsByTagName("canvas") [0].style.margin = "0 0 0 " + t + "px";
}

document.body.onscroll = moveCamera;
