function click(turnOn){
var go = document.getElementByClass("green");

// Watch out! You should doublecheck, but getElementByClass returns an array
var lightOn = document.getElementByClass(turnOn);

// We don't actually have a variable for light yet
light.style.backgroundColor = turnOn;


}
