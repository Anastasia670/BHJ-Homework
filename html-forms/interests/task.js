
'use strict';

const interest = document.querySelectorAll('.interest__check');

interest.item(0).addEventListener('change', () => {

    if (interest.item(0).checked) {

        interest.item(1).checked = true;

        interest.item(2).checked = true;

    } else {

        interest.item(1).checked = false;

        interest.item(2).checked = false;

    }

});



interest.item(3).addEventListener('change', () => {

    if (interest.item(3).checked) {

        interest.item(4).checked = true;

        interest.item(5).checked = true;

    } else {

        interest.item(4).checked = false;

        interest.item(5).checked = false;

    }

});





