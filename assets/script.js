const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

console.log(slides.length)

// Ajout d'Event Listeners sur les flèches et sur les bullet points
let leftBtn = document.querySelector(".arrow_left")
leftBtn.addEventListener("click", function() {
	console.log("Vous avez cliqué sur la flèche gauche")
})

let rightBtn = document.querySelector(".arrow_right")
rightBtn.addEventListener("click", function() {
	console.log("Vous avez cliqué sur la flèche droite")
})

let activeDot = document.querySelector(".dots")
activeDot.addEventListener("click", function() {
	console.log("Vous avez cliqué sur le bullet point")
})

// Ajout des bullet points sur le slider
const dotDiv = document.querySelector(".dots")

for(let i = 0; i < slides.length; i++) {
	const dot = document.createElement("span")
	dot.classList.add("dot") 
	dotDiv.appendChild(dot)
}

// Différencier le slide en cours de visionnage en remplissant le bullet point 
const currentSlide = dotDiv.querySelector(".dot");
currentSlide.classList.add("dot_selected");