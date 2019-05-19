'use strict'

const clickNumber = document.getElementById('clicker__counter') 
const image = document.getElementById('cookie');
image.onclick = function() {

	clickNumber.textContent++
	if (clickNumber.textContent % 2 !== 0) {
	image.width = 300;
	image.height = 250;

		} else {
		image.width = 200;
		image.height = 150;
		}

}

