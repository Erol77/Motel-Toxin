//color: #23C967;
'use strict';
const infoFormOpen = document.querySelector(".info-form-open");
const addingForm = document.querySelector('.adding-form');
const more = document.querySelector('.more');
// const radioCheked = document.querySelectorAll('.radio-cheked');
const formRadio = document.querySelectorAll('.form_radio');
const nameRadio= document.querySelectorAll('[name="radio"]');
const radioBtn = document.querySelector('.radio-btn');
const container = document.querySelector('.container');
const radioCheked = document.querySelectorAll('.radio-cheked');

    const radioChekedAdd =() =>{
        for (let i=0;i< nameRadio.length; i++) {
            if (nameRadio[i].checked) {
                radioCheked[i].classList = 'radio-cheked_ok';
                //  console.log('Выбран '+i+' radiobutton');
            } else {
                radioCheked[i].classList = 'radio-cheked';

            }
        }};
    
        radioChekedAdd();

//const formRadio = document.querySelectorAll('.form_radio');
console.log(nameRadio.checked);
//     formRadio.forEach((iner)=>{
    window.addEventListener(nameRadio.checked, () => {
    for (let i=0;i< nameRadio.length; i++) {
        if (nameRadio[i].checked) {console.log('Выбран '+i+' radiobutton');
        }
      }
    });
          if (nameRadio.cheked) {             console.log(formRadio);            }
//            // formRadio.querySelector('div > p').style.backgroundColor = " #23C967";
//             radioCheked.textContent = 'style="#23C967"';
//     }('cheked')

//     // formRadio.querySelector.checked('div > p').style.color = " #23C967";
// }); adding-form-open    info-form-open  more


more.addEventListener('click', () => {
    infoFormOpen.classList = ("info-form");
    addingForm.classList = 'adding-form-open';
});
radioBtn.addEventListener('click', () => {
    for (let i=0;i< nameRadio.length; i++) {
        if (nameRadio[i].checked) {console.log('Выбран '+i+' radiobutton');
        }
      }
});
container.addEventListener('click', () => {
   
      radioChekedAdd();
});