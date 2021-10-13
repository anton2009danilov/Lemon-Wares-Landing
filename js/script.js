'use strict';

window.onload = () => {
	const burgerMenu = document.getElementById('burger-menu');
	const heroSlider = document.getElementById('hero-slider');
	let heroSliderWidth = heroSlider.offsetWidth;
	console.log(heroSliderWidth);
	heroSlider.scrollLeft = heroSliderWidth;

	document.body.addEventListener('click', (e) => {

		if (e.target.id === 'burger-btn' || e.target.parentNode.id === 'burger-btn') {
			burgerMenu.classList.toggle('d-none');
		}

		if (e.target.classList.contains('hero__nav-link')) {
			const targetLink = e.target;
			const linkedSlide = document.getElementById(targetLink.dataset.slide);
			const prevSelectedLink = document.getElementsByClassName('hero__nav-link--selected')[0];

			prevSelectedLink.classList.toggle('hero__nav-link--selected');
			targetLink.classList.toggle('hero__nav-link--selected');

			console.log(linkedSlide);

			if (!linkedSlide.classList.contains('hero__slide--active')) {
				const prevSelectidSlide = document.getElementsByClassName('hero__slide--active')[0];
				prevSelectidSlide.classList.toggle('hero__slide--active');
				linkedSlide.classList.toggle('hero__slide--active');
			}

		}

		if (e.target.id === 'payment-period-toggle-btn') {
			const paymentToggleBtn = e.target;
			const monthlyPayment = document.getElementById('monthly-payment');
			const yearlyPayment = document.getElementById('yearly-payment');

			const monthFeeOptions = document.getElementById('month-fee-options');
			const yearFeeOptions = document.getElementById('year-fee-options');

			paymentToggleBtn.classList.toggle('toggle-btn--on');

			if (paymentToggleBtn.classList.contains('toggle-btn--on')) {
				monthlyPayment.checked = false;
				yearlyPayment.checked = true;

				monthFeeOptions.classList.remove('pricing__fee-options-container--selected');
				yearFeeOptions.classList.add('pricing__fee-options-container--selected');
			} else {
				monthlyPayment.checked = true;
				yearlyPayment.checked = false;

				monthFeeOptions.classList.add('pricing__fee-options-container--selected');
				yearFeeOptions.classList.remove('pricing__fee-options-container--selected');
			}
		}

		if (e.target.id === 'monthly-payment-label') {
			const paymentToggleBtn = document.getElementById('payment-period-toggle-btn');
			paymentToggleBtn.classList.remove('toggle-btn--on');

			const monthFeeOptions = document.getElementById('month-fee-options');
			const yearFeeOptions = document.getElementById('year-fee-options');

			monthFeeOptions.classList.add('pricing__fee-options-container--selected');
			yearFeeOptions.classList.remove('pricing__fee-options-container--selected');
		}

		if (e.target.id === 'yearly-payment-label') {
			const paymentToggleBtn = document.getElementById('payment-period-toggle-btn');
			paymentToggleBtn.classList.add('toggle-btn--on');

			const monthFeeOptions = document.getElementById('month-fee-options');
			const yearFeeOptions = document.getElementById('year-fee-options');

			monthFeeOptions.classList.remove('pricing__fee-options-container--selected');
			yearFeeOptions.classList.add('pricing__fee-options-container--selected');
		}

		if (e.target.id === 'basic-package-label') {
			const basicPackageLabel = e.target;
			const premiumPackageLabel = document.getElementById('premium-package-label');

			if (!basicPackageLabel.classList.contains('pricing__payment-type-label--selected')) {
				basicPackageLabel.classList.add('pricing__payment-type-label--selected');
				premiumPackageLabel.classList.remove('pricing__payment-type-label--selected');
			}

			const basicPaymentOptions = document.querySelectorAll('.pricing__fee-options[data-pricing-type="basic"]');
			const premiumPaymentOptions = document.querySelectorAll('.pricing__fee-options[data-pricing-type="premium"]');

			basicPaymentOptions.forEach(el => {
				if (!el.classList.contains('pricing__fee-options--selected')) {
					el.classList.add('pricing__fee-options--selected');
				}
			});

			premiumPaymentOptions.forEach(el => {
				if (el.classList.contains('pricing__fee-options--selected')) {
					el.classList.remove('pricing__fee-options--selected');
				}
			});
		}

		if (e.target.id === 'premium-package-label') {
			const premiumPackageLabel = e.target;
			const basicPackageLabel = document.getElementById('basic-package-label');

			if (!premiumPackageLabel.classList.contains('pricing__payment-type-label--selected')) {
				basicPackageLabel.classList.remove('pricing__payment-type-label--selected');
				premiumPackageLabel.classList.add('pricing__payment-type-label--selected');
			}

			const basicPaymentOptions = document.querySelectorAll('.pricing__fee-options[data-pricing-type="basic"]');
			const premiumPaymentOptions = document.querySelectorAll('.pricing__fee-options[data-pricing-type="premium"]');

			basicPaymentOptions.forEach(el => {
				if (el.classList.contains('pricing__fee-options--selected')) {
					el.classList.remove('pricing__fee-options--selected');
				}
			});

			premiumPaymentOptions.forEach(el => {
				if (!el.classList.contains('pricing__fee-options--selected')) {
					el.classList.add('pricing__fee-options--selected');
				}
			});
		}

	});

}