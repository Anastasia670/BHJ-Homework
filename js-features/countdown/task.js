'use strict';



const start = document.getElementById('timer');

const timer = setInterval(count, 1000);


function count () {

		start.textContent --;

	if (start.textContent == 0) {
        
		clearInterval(timer); 
		alert('Вы победили в конкурсе!')
	

	}
}



