
// option one--------------
function makeRed(){
    document.body.style.backgroundColor='red';
}
function makeYellow(){
    document.body.style.backgroundColor='yellow';
}

// option 2----------------------
const buttonBlue = document.getElementById("btn-blue");
buttonBlue.onclick = function buttonBlueCollor(){
    document.body.style.backgroundColor = 'blue';
}
// -----------------------------------------
// option 3 ------------------------
const buttonPurpleColor = document.getElementById("btn-purple");

buttonPurpleColor.onclick = blueFunction;
function blueFunction(){
    document.body.style.backgroundColor='purple';
}