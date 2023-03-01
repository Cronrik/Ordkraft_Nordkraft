// onClick event til at ændre sjernes farve når man klikker på den
function myFunction(){
    document.getElementById("demo").style.color = "red"
}
// modal
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