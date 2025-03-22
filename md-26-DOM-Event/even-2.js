
const makeYellow = document.getElementById('make-yellew');
// console.log(makeYellow);
makeYellow.onclick = function makey(){
    document.body.style.backgroundColor= 'yellow';
}
// -----------------------------------------------
// option 3-----------------------------
const makeBtnPurple = document.getElementById('btn-make-purple');
makeBtnPurple.onclick = makePurple;

function makePurple(){
    document.body.style.backgroundColor = 'purple';
}