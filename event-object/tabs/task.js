'use strict'

const tabs = Array.from(document.getElementsByClassName('tab'));

const tabContent = Array.from(document.getElementsByClassName('tab__content'));


for (let tab of tabs) {

  tab.addEventListener('click', event => {
  tab.classList.add('tab_active')
  	
  for (let i of tabContent){
   	i.classList.remove('tab__content_active')
   }
  
 tabContent[tabs.indexOf(tab)].classList.add('tab__content_active');


  });

}