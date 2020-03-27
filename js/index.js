var audioTom1 = new Audio("sounds/tom-1.mp3");
var audioTom2 = new Audio("sounds/tom-2.mp3");
var audioTom3 = new Audio("sounds/tom-3.mp3");
var audioTom4 = new Audio("sounds/tom-4.mp3");
var audioSnare = new Audio("sounds/snare.mp3");
var audioCrash = new Audio("sounds/crash.mp3");
var audioKick = new Audio("sounds/kick-bass.mp3");

document.addEventListener("keydown", function(e) {
    playSound(e.key);
    animateButton(e.key);
});

var drums = document.getElementsByClassName("drum");
for (var i = 0; i < drums.length; i++) {
    drums[i].addEventListener("click", function() {
        playSound(this.innerHTML);
        animateButton(this.innerHTML);
    });
}

function playSound(letter) {
    switch (letter) {
        case "w":
            audioTom1.play();
            break;
        case "a":
            audioTom2.play();
            break;
        case "s":
            audioTom3.play();
            break;
        case "d":
            audioTom4.play();
            break;
        case "j":
            audioSnare.play();
            break;
        case "k":
            audioCrash.play();
            break;
        case "l":
            audioKick.play();
            break;
        default:
            console.log("No audio file for " + this.innerHTML);
    }
}

function animateButton(letter) {
    var activeButton = document.querySelector("." + letter);
    console.log(activeButton);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
