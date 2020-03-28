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
            play(audioTom1);
            break;
        case "a":
            play(audioTom2);
            break;
        case "s":
            play(audioTom3);
            break;
        case "d":
            play(audioTom4);
            break;
        case "j":
            play(audioSnare);
            break;
        case "k":
            play(audioCrash);
            break;
        case "l":
            play(audioKick);
            break;
        default:
            console.log("No audio file for " + this.innerHTML);
    }
}

function play(audio) {
    if (!audio.isPaused) {
        audio.pause();
        audio.currentTime = 0;
    }
    audio.play();
}

function animateButton(letter) {
    var activeButton = document.querySelector("." + letter);
    console.log(activeButton);
    activeButton.classList.add("pressed");
    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}
