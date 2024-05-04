function fade_preloader() {
    $("#preloader").animate({
        left: '2000px'
    }, 3000, 'linear');
}

setTimeout(() => fade_preloader(), 5000);
setTimeout(() => $("#preloader").addClass("d-none"), 7000);

// $("#.circles div").fadeIn(2000);


var opacity = 0;
var intervalID = 0;
window.onload = fadeIn;

function fadeIn() {
    setInterval(show, 200);
}

function show() {
    var body = document.querySelector(".circles div");
    opacity = Number(window.getComputedStyle(body)
        .getPropertyValue("opacity"));
    if (opacity < 1) {
        opacity = opacity + 0.1;
        body.style.opacity = opacity
    } else {
        clearInterval(intervalID);
    }
}