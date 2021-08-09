var css = document.querySelector("h3");
var h2 = document.querySelector("h2");
var c1 = document.querySelector(".C1");
var c2 = document.querySelector(".C2");
var body = document.getElementById("gradient");




function colorChange() {
	body.style.background = "linear-gradient(to right, "+ c1.value+", "+c2.value+")";
	css.textContent = "\""+body.style.background + "\";";
	h2.style.background = "linear-gradient(to left, "+ c1.value+", "+c2.value+")";
}

colorChange();

c1.addEventListener("input", colorChange);

c2.addEventListener("input", colorChange);