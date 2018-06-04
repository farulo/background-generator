var css    = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body   = document.getElementById("gradient")
const name = "fabio";
const age = 34;
const pet = "dog";

function setGradient(){
	//body
	body.style.background = "linear-gradient(to right,"+ color1.value + ", " + color2.value + ") ";
	css.textContent = body.style.background + ";";
}
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
	
const greeting = `Hello ${name} you seem a lot younger than ${age}, By the way that is a pretty ${pet}`;