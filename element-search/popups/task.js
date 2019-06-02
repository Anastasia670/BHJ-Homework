'use strict';


const window1 = document.getElementById('modal_main'); 
const window2 = document.getElementById('modal_success')
const success = document.querySelector('a.show-success')
const close = document.getElementsByClassName('modal__close')

let arr = Array.from(close)

for (let index of arr){
	if (index.className.includes('modal__close')){
	index.onclick = function (){
		index.closest('.modal.modal_active').className = 'modal';
		//console.log(index)
	}
}

}
   

success.onclick = function() {
	
  window1.className = 'modal';
  window2.className = 'modal modal_active';
  

};
   

