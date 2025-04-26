
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
// option 4 --------------------------
document.getElementById('btn-make-green').addEventListener('click', function makeGreen(){
    document.body.style.backgroundColor = 'green';
  });
//   opton 4 -----------------------------
document.getElementById("btn-gold")
.addEventListener('click', function (){
    document.body.style.backgroundColor= 'gold';
})