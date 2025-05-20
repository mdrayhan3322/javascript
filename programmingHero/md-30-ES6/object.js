const student ={
    name : "nejam",
    roll : 23,
    frend: ['rohim','korem', 'daud','rayhan']
    
};
// console.log(student);
const a = student.frend;
// console.log(...a);
// -------------------------------------

const  car = {
    name : 'bmw',
    price:230,
    model:['a','b','c']

};
// --------------------------------------------
// structure const {}=objectName;
const {name,price,model}=car;
// console.log(name);
// console.log(price);

// 

// --------------------------------
// array sturcturing structure
//dataType variable = [] arrayName;

const ar = ['rayhan','mahamud',{obj:'and'},'arafat'];
const [ab,c]=ar;
console.log(ab);