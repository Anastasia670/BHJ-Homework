'use strict'

const rotators = Array.from(document.querySelectorAll('.rotator__case'))
const rotation= setInterval(changeSpan, 1000)



let i = 0
function changeSpan(){
	
rotators[i].classList.remove('rotator__case_active');

	i++;

	if (i === rotators.length) {

		i = 0;

	}

rotators[i].classList.add('rotator__case_active')
	
		}		




