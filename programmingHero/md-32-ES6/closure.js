
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

//   -----------------------------------------------


// function sum(num1,num2){
//     const s = num1+num2;
//     if(true){
//     //    const  a = num1 - num2;
//        var b = num1 - num2;
//         // console.log(a)
//     }
//     // console.log(a);
//     // console.log(b);
  
// }
// console.log(b);
// sum(12,23);
// console.log(s);
