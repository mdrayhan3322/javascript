
// const revers = [10 ,20 ,30 ,40, 50, 60 ,70];
// let rev = revers.reverse();
// console.log(rev);

// ----------------------------------------

// const rever = [10 ,20 ,30 ,40 ,50 ,60 ,70 ,80 ];

// const kale = [];
// for(let rev of rever){
//     console.log(rev);
//     kale.push(rev);
    
// }
// console.log(kale);

// -----------------------------
// const ar = [10, 20, 30];
// const k = [];
// for(let a of ar){
//     console.log(a);
//     k.unshift(a);
// }
// console.log(k);

// --------------------
// const a =[10,20,30];
// const b =[];
// for(let i=0; i<a.length; i++){
//     const  d = a[i];
//    console.log(d);
//    b.unshift(d); 

// }
// console.log(b);

// ------------------------------
const number =[10,20,30];
const rev = [];
for(let i= number.length -1;  i>=0; i--){
    const num = number[i];
    console.log(num);
    rev.push(num);
   


}
console.group(rev);


