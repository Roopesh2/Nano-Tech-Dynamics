const hamburgerBtn = document.getElementById("hamburger");
const closeIcon = document.getElementById("close");
const openIcon = document.getElementById("open");
const navMenu = document.querySelector(".menu");

const productsGrid = document.querySelector("#products-carousal");

const products = [
	{
		"file": "pump.webp",
		"name": "Turbomoleculer pump parts"
	},
	{
		"file": "huv-antenna.webp",
		"name": "High Frequency UHV Compatible Conical Antenna (Surface Finish Up To 0.4μm)"
	},
	{
		"file": "s-band.webp",
		"name": "S Band Mode Converter Wave Guide (Surface Finish Up To 0.4μm)"
	},
	{
		"file": "s-band-90-c.webp",
		"name": "S Band 90 Degree Circular Bend Wave Guide"
	},
	{
		"file": "s-band-90-r.webp",
		"name": "S Band 90 Degree Rectangular Bend Wave Guide"
	},
	{
		"file": "antenna-3.webp",
		"name": "High Frequency UHV Compatible Wave Guide"
	},
	{
		"file": "s-band-r.jpg",
		"name": "S Band Rectangular Wave Guide"
	},
	{
		"file": "product2.png",
		"name": "S Band Antenna For Defence Purpose"
	},
	{
		"file": "product4.webp",
		"name": "Micro Reactor Used For Defence Sector"
	},
	{
		"file": "product5.webp",
		"name": "Super Finished Mode Converter"
	},
	{
		"file": "product6.jpg",
		"name": "Micro Dialysis Setup For Usa"
	}
]

function toggleHamburger() {
	navMenu.classList.toggle("show");
	closeIcon.classList.toggle("show");
	openIcon.classList.toggle("show");
}

// toggle hamburger menu
hamburgerBtn.addEventListener("click", toggleHamburger);
navMenu.addEventListener("click", toggleHamburger);

window.addEventListener("load", () => {
	for (let product of products) {
		productsGrid.innerHTML += `
<div class="card">
	<img src="./assets/products/${product.file}" alt="" class="card-img" />
	<h3 class="card-title">${product.name}</h3>
</div>
		`
	}
});