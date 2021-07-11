'use strict';
const infoFormOpen = document.querySelector(".info-form-open");
const addingForm = document.querySelector('.adding-form');
const more = document.querySelector('.more');
const formRadio = document.querySelectorAll('.form_radio');
const nameRadio= document.querySelectorAll('[name="radio"]');
const radioBtn = document.querySelector('.radio-btn');
const container = document.querySelector('.container');
const radioCheked = document.querySelectorAll('.radio-cheked');
const subheader= document.querySelector('.subheader');
const editForm = document.querySelector('.edit-form');
const byuBtn = document.querySelector('.byu-btn');
const editFormElement = document.querySelector('.edit-form__element');
 let data1 = { 0 : 80 , 1 : 72, 2 : 60, 3 : 44, 4 : 24.99};
let data = [ 0, 24.99, 44, 60 , 72, 80];
//кнопка сколько выбрано объектов
    const radioChekedAdd =() =>{
        for (let i=0;i< (nameRadio.length); i++) {
            if (nameRadio[i].checked) {
                radioCheked[i].classList = 'radio-cheked_ok';
                console.log('Submit and Pay '+ data1[i]+' USD');
                console.log(radioCheked[i].values);
                return (5-i);
            } else {
                radioCheked[i].classList = 'radio-cheked';
            }
        }};
        // for (let i=0;i< nameRadio.length; i++) {
        //     if (nameRadio[i].checked) {console.log('Submit and Pay '+ data[i]+' USD');
        // let i =0;

        const addElement = (i) =>{
        for (let j=0;j< i; j++) {
            const div = document.createElement('div');
            div.innerHTML= `
            <h2>Product ${j+1 }    <a class="more edit-blok" href="#">    <img src="img/x-mark 16close.svg" alt="cloce" class="edit-blok">   </a> </h2>            
                <p for="">Enter main keyword for the product</p>
                        <input class="info-form__input" type="text" name="product" placeholder="for example, sylicon wine cup ">
                            <hr>
                            <p for="">Enter link to the similar product as a reference</p>
                                <input class="info-form__input" type="text"   name="reference" placeholder="https://...">
                                    <hr>   
        </div> `;
                 editFormElement.append(div);
        }};
    
        radioChekedAdd();

        let totalPrice = 0;
        //управляем корзиной, изменяем в ней эл ты
// console.log(totalPrice);


//кнопка из 1 формы, переводит на 2 ую форму
more.addEventListener('click', () => {
    infoFormOpen.classList = ("info-form");
    addingForm.classList = 'adding-form-open';
});
//кнопка из 2 формы
radioBtn.addEventListener('click', () => {
    // radioChekedAdd();
        addingForm.classList = ('adding-form');
        editForm.classList = 'edit-form-open';
        byuBtn.textContent = `Submit and Pay + ${data[radioChekedAdd()]}+ USD`;
        addElement(radioChekedAdd());

        }
);

//кнопка из 3 формы
container.addEventListener('click', () => {
   
      radioChekedAdd();
});
//открыввет первую форму
subheader.addEventListener('click', () => {
    infoFormOpen.classList = "info-form-open";
    addingForm.classList = 'adding-form';
    editForm.classList = 'edit-form';
});


// 80 usd / 16$ for each
// 4 products for 72 usd / 18$ for each
// 3 products for 60 usd / 20$ for each
// 2 products for 44 usd / 22$ for each
  