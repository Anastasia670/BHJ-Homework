

'use strict'

const reveals = document.querySelectorAll('.reveal');



document.addEventListener('scroll', function() {

  const viewPortHeight = window.innerHeight;

  for (let reveal of reveals) {

    const elementTop = reveal.getBoundingClientRect().top;

    if (elementTop < viewPortHeight && elementTop > 0) {

      reveal.classList.add('reveal_active');

    }

  }

});


