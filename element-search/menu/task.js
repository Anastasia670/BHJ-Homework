   

'use strict'

const showMenu = document.querySelectorAll('.menu__item')
let menu = Array.from(showMenu)

const showMenuSub = document.querySelectorAll('.menu_sub');
let menuSub = Array.from(showMenuSub);



for (let index of menu){
	if (index.querySelector('.menu_sub')){
	index.querySelector('.menu__link').onclick = function (){
    for (let item of menuSub){
    	item.className = 'menu menu_sub '
    }

index.querySelector('.menu_sub').className = 'menu menu_sub menu_active' 
 return false;
	}
}

}


// 'use strict'





// const showMenu = document.querySelectorAll('.menu__item')	

// let menu = Array.from(showMenu)



// for (let index of menu){

// 	if (index.querySelectorAll('.menu_sub')){

// 	index.querySelector('.menu__link').onclick = function (){

// 	index.closest('.menu').className = 'menu active';	

// 	index.querySelector('.menu_sub').className = 'menu menu_sub menu_active'

//     return false;

// }

// }

// }