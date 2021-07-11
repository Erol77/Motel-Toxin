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
const btnDelete = document.querySelectorAll('.btn-delete');
const successFormOpen = document.querySelector('.success-form');
const failedFormOpen = document.querySelector('.failed-form-open');
const failedBack = document.querySelector('.failed-back');
const failedform = document.querySelector('.failed-form');

// const btnTxt = document.querySelectorAll('.btn-txt');
const succsessBack = document.querySelector('.succsess-back');
 let data1 = { 0 : 80 , 1 : 72, 2 : 60, 3 : 44, 4 : 24.99};
let data = [ 0, 24.99, 44, 60 , 72, 80];
const getLocalStorage = () => JSON.parse(localStorage.getItem('test-location')) || [];
//получаем данные из локал сторедж/?-зажишщает от неправильных данных
const setLocalStorage = edata => localStorage.setItem('test-location', JSON.stringify(edata));
//передаем данные в локал сторедж
    //ydalenie iz korziny
    const deleteItemsCard = () => {
        const cartItems = getLocalStorage();
        const newCartItems = cartItems-1;
        setLocalStorage(newCartItems);
    };
//кнопка сколько выбрано объектов
    const radioChekedAdd =() =>{
        for (let i=0;i< (nameRadio.length); i++) {
            if (nameRadio[i].checked) {
                radioCheked[i].classList = 'radio-cheked_ok';
                // console.log('Submit and Pay '+ data1[i]+' USD');                console.log(radioCheked[i].values);
                return (5-i);
            } else {
                radioCheked[i].classList = 'radio-cheked';
            }
        }};
        // for (let i=0;i< nameRadio.length; i++) {
        //     if (nameRadio[i].checked) {console.log('Submit and Pay '+ data[i]+' USD');
        // let i =0;
        const renderCart = () => {
            editFormElement.textContent = '';//чистим класс
            const cartItems = getLocalStorage();
            // let totalPrice = 0;
            //управляем корзиной, изменяем в ней эл ты
        for (let j=0;j< cartItems; j++) {
            const div = document.createElement('div');
            div.innerHTML= `
            <h2>Product ${j+1 } 
               <a class="btn-delete" data-id="${j}" href="#">  
                 <img src="img/x-mark 16close.svg" alt="cloce" class="edit-blok">  
             </a>             
            </h2>            
                <p>Enter main keyword for the product</p>
                        <input class="info-form__input" type="text" name="product" placeholder="for example, sylicon wine cup ">
                            <hr>
                            <p >Enter link to the similar product as a reference</p>
                                <input class="info-form__input" type="text"   name="reference" placeholder="https://...">
                                    <hr>   
        </div> `;
                 editFormElement.append(div);
                }

                byuBtn.textContent = `Submit and Pay  ${data[cartItems]} USD`;
    
};
        // radioChekedAdd();

//кнопка из 1 формы, переводит на 2 ую форму
more.addEventListener('click', () => {
    infoFormOpen.classList = ("info-form");
    addingForm.classList = 'adding-form-open';
});
//кнопка из 2 формы
radioBtn.addEventListener('click', () => {
        addingForm.classList = ('adding-form');
        editForm.classList = 'edit-form-open';
        localStorage.setItem('test-location', radioChekedAdd());   
        renderCart();
        }
);
        // кнопка из 3 формы закрывающая 1 эл-т
        editFormElement.addEventListener('click', e => {
            deleteItemsCard();
                renderCart(); 
       });

    //    succsessBack.addEventListener('click',() => {
    //        infoFormOpen.classList = "info-form";
    //        .,
           
    //    });
//iz4 v1 okno
// failedBack.addEventListener('click',() => {
//     infoFormOpen.classList = "info-form-open";
//     failedFormOpen.classList = 'failed-form';
// });
// btn1.onclic = 
// const 
btn1.onclick = function() {
    infoFormOpen.classList = "info-form";
        failedform.classList = 'failed-form-open';
        console.log(btn1.value);
  };


  btn2v3.onclick = function() {
    successFormOpen.classList = ('success-form-open');
    editForm.classList.toggle('edit-form');
     };
     btn3v1.onclick = function() {
        successFormOpen.classList.toggle('success-form');
        infoFormOpen.classList = ('info-form-open');
        // щчистить кэш
        // deleteItemsCard();
               
        setLocalStorage(0); renderCart(); 
         };

  btn4to1.onclick = function() {
    infoFormOpen.classList = "info-form-open";
    failedform.classList.toggle('failed-form');
  }

    //    btnTxt.addEventListener('click', () =>{
        //    btnTxt.onclick= () => {btnTxt.textContent = (` <img src="/src/tz1/img/route1.svg" alt="C" class="soon">`);};
    //    });


//открыввет первую форму
subheader.addEventListener('click', () => {
    infoFormOpen.classList = "info-form-open";
    addingForm.classList = 'adding-form';
    editForm.classList = 'edit-form';
});
{/* <img src="/src/tz1/img/route1.svg" alt="C" class="soon"> */}

// 80 usd / 16$ for each
// 4 products for 72 usd / 18$ for each
// 3 products for 60 usd / 20$ for each
// 2 products for 44 usd / 22$ for each
          // editFormElement.classList='';
              // radioChekedAdd();
        // byuBtn.textContent = `Submit and Pay  ${data[radioChekedAdd()]} USD`;
        // addElement(radioChekedAdd());

        // при достиженни этой формы нужно дописать в url paymentsuccess
       console.log( location.href);
       let params = (new URL(document.location)).searchParams; 
console.log(params.get("data"));

// function getAllUrlParams(url) {  // извлекаем строку из URL или объекта window
//   var queryString = url ? url.split('?')[1] : window.location.search.slice(1);  // объект для хранения параметров
//   var obj = {};  // если есть строка запроса
//   if (queryString) {    // данные после знака # будут опущены
//     queryString = queryString.split('#')[0];    // разделяем параметры
//     console.log(queryString);
//     var arr = queryString.split('&');
//     for (var i=0; i<arr.length; i++) {      // разделяем параметр на ключ => значение
//       var a = arr[i].split('=');      // обработка данных вида: list[]=thing1&list[]=thing2
//       var paramNum = undefined;
//       var paramName = a[0].replace(/\[\d*\]/, function(v) {

//         paramNum = v.slice(1,-1);
//         return '';
//       });      // передача значения параметра ('true' если значение не задано)
//       var paramValue = typeof(a[1])==='undefined' ? true : a[1];      // преобразование регистра
//       paramName = paramName.toLowerCase();
//       paramValue = paramValue.toLowerCase();      // если ключ параметра уже зада
//       if (obj[paramName]) {        // преобразуем текущее значение в массив
//         if (typeof obj[paramName] === 'string') {
//           obj[paramName] = [obj[paramName]];
//         }        // если не задан индекс...
//         if (typeof paramNum === 'undefined') {          // помещаем значение в конец массива
//           obj[paramName].push(paramValue);
//         }        // если индекс задан...
//         else {   // размещаем элемент по заданному индексу
//           obj[paramName][paramNum] = paramValue;
//         }
//       }      // если параметр не задан, делаем это вручную
//       else {
//       obj[paramName] = paramValue;
//       }
//     }

//   }

//   return obj;
// }
// getAllUrlParams(location.href);

// if (!getAllUrlParams(location.href)) {
//     if(getAllUrlParams() === 'paymentsuccess'){
//         successFormOpen.classList = ('success-form-open');
//         editForm.classList = 'edit-form';
//         infoFormOpen.classList = "info-form";
//         failedform.classList= ('failed-form');
        
// }else if (getAllUrlParams() === 'paymenterror' ){
//     successFormOpen.classList = ('success-form');
//     editForm.classList = 'edit-form';
//     infoFormOpen.classList = "info-form";
//     failedform.classList= ('failed-form-open');

// } else{ console.log(getAllUrlParams());}