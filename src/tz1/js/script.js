//color: #23C967;
'use strict';
const infoFormOpen = document.querySelector(".info-form-open");
const addingForm = document.querySelector('.adding-form');
const more = document.querySelector('.more');

const formRadio = document.querySelectorAll('.form_radio');
console.log(formRadio.values('checked'));
//     formRadio.forEach((iner)=>{
//         if (formRadio.checked){
//            // formRadio.querySelector('div > p').style.backgroundColor = " #23C967";
//             radioCheked.textContent = 'style="#23C967"';
//     }('cheked')

//     // formRadio.querySelector.checked('div > p').style.color = " #23C967";
// }); adding-form-open    info-form-open  more


more.addEventListener('click', () => {
    infoFormOpen.classList = ("info-form");
    addingForm.classList = 'adding-form-open';
});