'use strict';

const dropDownList = Array.from( document.querySelectorAll('.dropdown__list'));

const links = Array.from( document.querySelectorAll('.dropdown__link'));

const values = Array.from( document.querySelectorAll('.dropdown__value'));




for (let index of dropDownList) {

	index.closest('div').addEventListener('click', function() {

		index.classList.toggle('dropdown__list_active');

	})


	for (let link of links) {

		link.closest('li').addEventListener('click', function(event) {

			event.preventDefault();

         for (let value of values)
			value.textContent = link.textContent;

		})

	}

}

