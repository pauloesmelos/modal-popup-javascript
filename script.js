let button_open = document.querySelector('.open');
let modal = document.querySelector('.modal');
let darken = document.querySelector('.darken');
let button_close = document.querySelector('.close');

function callbackopen(){
    modal.classList.remove('hidden');
    darken.classList.remove('hidden');
}
button_open.addEventListener('click',callbackopen);

function callbackclose(){
    modal.classList.add('hidden');
    darken.classList.add('hidden');
}
button_close.addEventListener('click',callbackclose);