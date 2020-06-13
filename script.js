
alert("THIS IS BASICALLY A BACKGROUND GENERATOR");


var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var color3 = document.querySelector(".color3");
var body = document.getElementById("gradient");
var para1 = document.getElementById("para1");

console.log(body);

console.log(css);
console.log(color1);
console.log(color2);
console.log(color3);

function setGradient() {
	body.style.background = "linear-gradient(to right,"
	+ color1.value
	+ ", "
	+ color2.value
	+ ")";

	css.textContent = body.style.background + ";";
}

function setcolourpara() {
		para1.style.color = color3.value;

}

color1.addEventListener("input", setGradient);
	// console.log(color1.value);
	

color2.addEventListener("input", setGradient);
	// console.log(color2.value);
	
color3.addEventListener("input", setcolourpara);	

alert("CHOOSE YOUR FAVOURIE COLORS BELOW TO SEE THE CHANGE IN BACKGROUND COLOUR");