"use strict";

window.onload = () => {
	const burgerBtn = document.getElementById("burger-btn");
	const burgerMenu = document.getElementById("burger-menu");

	burgerBtn.addEventListener('click', () => {
		console.log(burgerMenu);
		burgerMenu.classList.toggle("d-none");
	})
}