alert("ma;lkdf");
function sum(){
    let counter = 0;
    return function(){
        counter++;
        console.log(counter);
    }
}
const result = sum();
  result();
  result();