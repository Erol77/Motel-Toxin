'use strict';
var popup = document.querySelector('.modal-login');
var loginLink = document.querySelector('.login-link');
var modalClose = document.querySelector('.modal-close');
const login = popup.querySelector('[name=email]');
const password = popup.querySelector('[name=password]');
const form = popup.querySelector('form');
var storage = localStorage.getItem("login");

 var isStorageSupport = true;

 try {
   storage = localStorage.getItem('login');
    } catch (err) {
      isStorageSupport = false;
    }


 loginLink.addEventListener('click', (e)=>{
   e.preventDefault();
   popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    password.focus();
  } else {
    login.focus();
  }
 });

 modalClose.addEventListener('click',(e)=>{
   e.preventDefault();
   popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
      // modalMap.classList.remove("modal-show");
 });


 
 form.addEventListener('submit', (e)=>{
   if (!login.value || !password.value) {
   e.preventDefault();
    // popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
    let popupWidht = popup.offsetWidth;
    popup.classList.add("modal-error");
    // console.log('нужно ввести логин и пароль');
    // console.log(password.value);
  } else {
    if (isStorageSupport) {
      localStorage.setItem('login', login.value);
    }
  }
});

window.addEventListener("keydown", (e)=>{
    if ( e.keyCode === 27 ){
          if (popup.classList.contains("modal-show")){
              e.preventDefault();
              popup.classList.remove("modal-show");
              popup.classList.remove("modal-error");
            }
        }
});