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
		"name": "High Frequency UHV Compatible Conical Antenna <br/>Surface Finish Up To 0.4μm Ra"
	},
	{
		"file": "s-band.webp",
		"name": "S Band Mode Converter Wave Guide - UHV Compatible <br/>Surface Finish Up To 0.4μm Ra"
	},
	{
		"file": "s-band-90-c.webp",
		"name": "S Band 90 Degree Circular Bend Wave Guide - UHV Compatible 1 meter <br/>Surface Finish Up To 0.4μm Ra"
	},
	{
		"file": "huv-antenna-2.webp",
		"name": "Conical Antenna - High Frequency UHV Compatible 𝜙90-400 mm x L350 mm"
	},
	{
		"file": "s-band-90-r.webp",
		"name": "S Band 90 Degree Rectangular Bend Wave Guide - UHV Compatible 1 meter"
	},
	{
		"file": "antenna-3.webp",
		"name": "High Frequency UHV Compatible Wave Guide 𝜙90 x L500 mm/1000 mm <br/>Surface Finish Up To 0.4μm Ra"
	},
	{
		"file": "s-band-r.jpg",
		"name": "S Band Rectangular Wave Guide UHV Compatible L-1 meter <br/>Surface Finish Up To 0.4μm Ra"
	},
	{
		"file": "product4.webp",
		"name": "Micro Reactor"
	},
	{
		"file": "product5.webp",
		"name": "Super Finished Mode Converter"
	},
	{
		"file": "product6.png",
		"name": "Micro Dialysis Setup For USA"
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
	<h4 class="card-title" style="font-weight: 600;">${product.name}</h3>
</div>
		`
	}
});