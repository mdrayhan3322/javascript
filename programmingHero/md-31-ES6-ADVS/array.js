
// const ar = [1,2,3,4,5,6,7];
// let tem = [];
// for(let a =0; a<ar.length; a++){
//     const b = ar[a];
//     const sum = b+1;
//     tem.push(sum);
    
// }
// console.log(tem);

// ---------------------------------------

//  map() function--------------

const number = [1,2,3,4,5,6,7];
// const AddNumbr = number.map(value => value+1);
// console.log(value);

const squer = number.map(singleValue =>{
    return singleValue*singleValue;
});
// console.log(squer);

// ------------------------------ dubble paramiter map function-------------------------
const frinds =['mahamud','arafat','syme','shomic'];
const a = frinds.map((element , index) =>{
     
    // console.log(index);
    // console.log(element);

})

// ------------------------- single paramiter map function ----------------------------------------

const frind = ['nijam','masud','jahid','jobaer'];
const singleValue = frind.map(name =>{
    console.log(name);
    return name;
});
console.log(singleValue);





