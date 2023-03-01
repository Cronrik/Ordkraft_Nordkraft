// fang sjerne ikonet fra begivenheds elementerne
let iconClick = document.getElementById("demo")
// onClick event til at ændre sjernes farve når man klikker på den
function myFunction(){
    // laver et if for at checke om ikonets farve er grå
    if(iconClick.style.color == "grey"){
        // hvis ikonet er grå, så skifter dem farve til rød
        iconClick.style.color = "red";
        // hvis den ikke er grå, så skifter det til grå
    } else{
        iconClick.style.color = "grey"
    }
}