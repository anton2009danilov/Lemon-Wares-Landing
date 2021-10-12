'use strict';

window.onload = () => {
	const burgerMenu = document.getElementById('burger-menu');

	document.body.addEventListener('click', (e) => {
		console.log(e.target);

		if (e.target.id === 'burger-btn' || e.target.parentNode.id === 'burger-btn') {
			burgerMenu.classList.toggle('d-none');
		}

	});
}