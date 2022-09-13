//creating variables and storing the html data into these vairiables
const submitBtn = document.getElementById('submit-btn');
const okayBtn = document.getElementById('popup-okay-btn');
const popUp = document.querySelector('.popUpBox');

//adds an event listener when the submit button is clicked
submitBtn.addEventListener('click',openPopUp);

//adds the class 'active' to the popup variable
function openPopUp() {
popUp.classList.add('active');
}

//adds an event listener when the okay button is clicked
okayBtn.addEventListener('click',changeColor);


let i = 1;
const colors = ["white","red","orange","yellow","green","blue","indigo","violet"];

//changes the color of the popup whenever the okay button is clicked 
// and closes the popout when the last color is reached
function changeColor() {
    popUp.style.backgroundColor = colors[i]
if (i > 7) {
    popUp.classList.remove('active');
    i=0
} else {
    i = i + 1;
}
}