const form = document.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

const USER = 'currentUser';
const SHOWING = 'showing';

function saveName(text){
    localStorage.setItem(USER,text);
}

function handleSubmit (event){
    event.preventDefault();
    const currentValue = input.value;
    console.log(currentValue);
    paintGreeting(currentValue);
    saveName(currentValue);
}

function askForName(){
    form.classList.add(SHOWING);
    form.addEventListener('submit',handleSubmit);
}

function paintGreeting (text) {
    form.classList.remove(SHOWING);
    greeting.classList.add(SHOWING);
    greeting.innerText = `Hello ${text}`;
}

function loadName(){
    const currentUser = localStorage.getItem(USER);
    if (currentUser === null){
        askForName();
    } else {
        paintGreeting(currentUser);

    }
}
function init (){
    loadName();
}

init();