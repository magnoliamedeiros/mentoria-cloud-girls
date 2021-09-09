var div = document.createElement("div");

var h1 = document.createElement("h1");
var p = document.createElement("p");

h1.classList.add("titulo");

h1.textContent = "Mirror fashion";
p.textContent = "Uma loja de roupa";

div.appendChild(h1);
div.appendChild(p);

console.log(div);