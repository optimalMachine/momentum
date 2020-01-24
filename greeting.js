const form = docuemtn.querySelector('.js-form');
const input = form.querySelector('input');
const greeting = document.querySelector('.js-greetings');

const USER = 'currentUser';
const SHOWING = 'showing';

function askForName(){
    form.classList.add(SHOWING);
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