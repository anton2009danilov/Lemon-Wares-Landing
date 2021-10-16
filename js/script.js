'use strict';

window.onload = () => {
	document.body.addEventListener('click', (e) => {

		if (e.target.id === 'burger-btn' || e.target.parentNode.id === 'burger-btn') {
			handleClickBurgerBtn(e);
		} else if (e.target.classList.contains('hero__nav-link')) {
			hanleClickHeroSlider(e);
		} else if (e.target.id === 'payment-period-toggle-btn') {
			hanleClickPaymentToggleBtn(e);
		} else if (e.target.id === 'monthly-payment-label' || e.target.id === 'yearly-payment-label') {
			hanleClickPaymentTypeLabel(e);
		} else if (e.target.id === 'basic-package-label' || e.target.id === 'premium-package-label') {
			hanleClickPackageTypeLabel(e);
		}
	});
}

function handleClickBurgerBtn(e) {
	const burgerMenu = document.getElementById('burger-menu');
	burgerMenu.classList.toggle('d-none');
}

function hanleClickHeroSlider(e) {
	const targetLink = e.target;
	const linkedSlide = document.getElementById(targetLink.dataset.slide);
	const prevSelectedLink = document.getElementsByClassName('hero__nav-link--selected')[0];

	prevSelectedLink.classList.toggle('hero__nav-link--selected');
	targetLink.classList.toggle('hero__nav-link--selected');

	if (!linkedSlide.classList.contains('hero__slide--active')) {
		const prevSelectidSlide = document.getElementsByClassName('hero__slide--active')[0];
		prevSelectidSlide.classList.toggle('hero__slide--active');
		linkedSlide.classList.toggle('hero__slide--active');
	}
}

function hanleClickPaymentToggleBtn(e) {

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

function hanleClickPaymentTypeLabel(e) {
	const paymentToggleBtn = document.getElementById('payment-period-toggle-btn');
	const monthFeeOptions = document.getElementById('month-fee-options');
	const yearFeeOptions = document.getElementById('year-fee-options');

	if (e.target.id === 'monthly-payment-label') {
		paymentToggleBtn.classList.remove('toggle-btn--on');

		monthFeeOptions.classList.add('pricing__fee-options-container--selected');
		yearFeeOptions.classList.remove('pricing__fee-options-container--selected');
	}

	if (e.target.id === 'yearly-payment-label') {
		paymentToggleBtn.classList.add('toggle-btn--on');

		monthFeeOptions.classList.remove('pricing__fee-options-container--selected');
		yearFeeOptions.classList.add('pricing__fee-options-container--selected');
	}
}

function hanleClickPackageTypeLabel(e) {

	const basicPackageLabel = document.getElementById('basic-package-label');
	const premiumPackageLabel = document.getElementById('premium-package-label');

	const basicPaymentOptions = document.querySelectorAll('.pricing__fee-options[data-pricing-type="basic"]');
	const premiumPaymentOptions = document.querySelectorAll('.pricing__fee-options[data-pricing-type="premium"]');

	if (e.target.id === 'basic-package-label') {
		const basicPackageLabel = e.target;

		if (!basicPackageLabel.classList.contains('pricing__payment-type-label--selected')) {
			basicPackageLabel.classList.add('pricing__payment-type-label--selected');
			premiumPackageLabel.classList.remove('pricing__payment-type-label--selected');
		}

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

		if (!premiumPackageLabel.classList.contains('pricing__payment-type-label--selected')) {
			basicPackageLabel.classList.remove('pricing__payment-type-label--selected');
			premiumPackageLabel.classList.add('pricing__payment-type-label--selected');
		}

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
}