const title = document.querySelector("#title");

const BASE_COLOR = "rgb(52,73,94)";
const OTHER_COLOR = "rgb(255,255,255)";


function handleClick() {
    
    const currentcolor = title.style.color;
    console.log(currentcolor); 
    if (currentcolor === BASE_COLOR){
        title.style.color = OTHER_COLOR;
    }else{
        title.style.color = BASE_COLOR;
    }
}

function init(){
    title.style.color = BASE_COLOR;
    title.addEventListener ("click",handleClick);

}

init();