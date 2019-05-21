'use strict'

const miss = document.getElementById('lost')
const hit = document.getElementById('dead')
const getHole = index => document.getElementById(`hole${index}`)

function game() {
	if (hit.textContent == 10) {
		alert('Победа!');
        miss.textContent = 0;
		hit.textContent = 0;
		
	} else if (miss.textContent == 5) {
		alert('Вы проиграли');
		miss.textContent = 0;
		hit.textContent = 0;

	}
}


for (let i = 1; i < 10; i++) {
	getHole(i).onclick = function() {
		if (getHole(i).className.includes( 'hole_has-mole' )) {
			hit.textContent++;
			game();
		} else {
			miss.textContent++;
			game();
		}
		
	}
}