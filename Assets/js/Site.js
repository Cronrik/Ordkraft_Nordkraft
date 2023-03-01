// fang sjerne ikonet fra begivenheds elementerne
let iconClick = document.getElementById("star");
// onClick event til at ændre sjernes farve når man klikker på den
function myFunction(){
    // laver et if for at checke om ikonets farve er grå
    if(iconClick.style.color == "grey"){
        // hvis ikonet er grå, så skifter dem farve til rød
        iconClick.style.color = "red";
        // hvis den ikke er grå, så skifter det til grå
    } else{
        iconClick.style.color = "grey";
    }
}

// fang sjerne ikonet fra begivenheds elementerne
let iconClick2 = document.getElementById("star2");
// onClick event til at ændre sjernes farve når man klikker på den
function myFunction2(){
    // laver et if for at checke om ikonets farve er grå
    if(iconClick2.style.color == "grey"){
        // hvis ikonet er grå, så skifter dem farve til rød
        iconClick2.style.color = "red";
        // hvis den ikke er grå, så skifter det til grå
    } else{
        iconClick2.style.color = "grey";
    }
}

// fang sjerne ikonet fra begivenheds elementerne
let iconClick3 = document.getElementById("star3");
// onClick event til at ændre sjernes farve når man klikker på den
function myFunction3(){
    // laver et if for at checke om ikonets farve er grå
    if(iconClick3.style.color == "grey"){
        // hvis ikonet er grå, så skifter dem farve til rød
        iconClick3.style.color = "red";
        // hvis den ikke er grå, så skifter det til grå
    } else{
        iconClick3.style.color = "grey";
    }
}

// fang sjerne ikonet fra begivenheds elementerne
let iconClick4 = document.getElementById("star4");
// onClick event til at ændre sjernes farve når man klikker på den
function myFunction4(){
    // laver et if for at checke om ikonets farve er grå
    if(iconClick4.style.color == "grey"){
        // hvis ikonet er grå, så skifter dem farve til rød
        iconClick4.style.color = "red";
        // hvis den ikke er grå, så skifter det til grå
    } else{
        iconClick4.style.color = "grey";
    }
}

// fang sjerne ikonet fra begivenheds elementerne
let iconClick5 = document.getElementById("star5");
// onClick event til at ændre sjernes farve når man klikker på den
function myFunction5(){
    // laver et if for at checke om ikonets farve er grå
    if(iconClick5.style.color == "grey"){
        // hvis ikonet er grå, så skifter dem farve til rød
        iconClick5.style.color = "red";
        // hvis den ikke er grå, så skifter det til grå
    } else{
        iconClick5.style.color = "grey";
    }
}

const modal = document.querySelector(".popup");
const trigger = document.querySelector(".udløs");

function toggleModal() {
    modal.classList.toggle("hvis_popup");
}

function windowOnClick(event) {
    if (event.target === modal) {
        toggleModal();
    }
}

trigger.addEventListener("click", toggleModal);
window.addEventListener("click", windowOnClick);