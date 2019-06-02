'use strict'


const arrows = document.getElementsByClassName('slider__arrow')
const slider = document.getElementsByClassName('slider__item')
const arrArrow = Array.from(arrows)	
const arrSlider = Array.from(slider)
let currentSlider = 0


for (let item of arrArrow) {
  if (item.className.includes('slider__arrow_next') ) {
    item.onclick = function() {
      arrSlider[currentSlider].className = 'slider__item';
     currentSlider +=1;

      if (currentSlider === arrSlider.length) {
        currentSlider = 0;
      }

      arrSlider[currentSlider].className = 'slider__item slider__item_active';

    }

  }

  if (item.className.includes('slider__arrow_prev')) {
    item.onclick = function() {
       arrSlider[currentSlider].className = 'slider__item';
      currentSlider -=1;
      if (currentSlider < 0 ) {
        currentSlider = arrSlider.length - 1;
      }
      arrSlider[currentSlider].className = 'slider__item slider__item_active';
    }
  }

}