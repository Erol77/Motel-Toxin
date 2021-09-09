'use strict';
const modalMap= document.querySelector('.modal-map');
const closeMap= modalMap.querySelector('.modal-close');
const buttonMap = document.querySelector('.btn-open-modal');

buttonMap.addEventListener('click', (e)=>{
   e.preventDefault();
    modalMap.classList.add("modal-show");
 });

closeMap.addEventListener('click',(e)=>{
   e.preventDefault();
   modalMap.classList.remove("modal-show");

 });