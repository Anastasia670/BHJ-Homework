'use strict'


const tooltip = document.querySelector('.tooltip');

document.body.addEventListener('click', (e) => {

	if (!e.target.classList.contains('has-tooltip')) return;
	e.preventDefault();	

	tooltip.innerText = e.target.getAttribute('title');

	tooltip.style.top = e.target.getBoundingClientRect().bottom.toString() + 'px';

	tooltip.style.left = e.target.getBoundingClientRect().left.toString() + 'px';

	tooltip.classList.add('tooltip_active');
	

	e.target.addEventListener('blur', () => {

		tooltip.classList.remove('tooltip_active');

	});

});





