// Detecting button press on mouse

for (i = 0; i < document.querySelectorAll(".drum").length; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {



    var buttonInnerHTML = this.innerHTML;

    makeSound(buttonInnerHTML);

    buttonAnimation(buttonInnerHTML);

    this.style.color = "black";

  });

}

// Detecting keyboard press

document.addEventListener("keydown", function(e) {
  makeSound(e.key);
  buttonAnimation(e.key);

});

function makeSound(key) {

  switch (key) {
    case "t":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
      break;

    case "r":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
      break;

    case "i":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
      break;


    case "p":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "l":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
      break;

    case "e":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
      break;

    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
      break;

    default:
      console.log(buttonInnerHTML);

  }
}

// Adding Animation

function buttonAnimation(currentKey) {
  var buttonActive = document.querySelector("." + currentKey);

  buttonActive.classList.add("pressed");

  setTimeout(function() {
    buttonActive.classList.remove("pressed");
  }, 200);

}



// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
