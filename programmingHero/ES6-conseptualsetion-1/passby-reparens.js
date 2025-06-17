
console.log('pass by balu');

const  name = 'jhon';
function greet(valu){
    valu = 20;
    console.log(valu);
}
console.log(name);
greet(name);
console.log(name);





// -------------------------------------
console.log('pass by repares');

const ar = [10,20,30,40,50];

function multipicaton (number){
    console.log(ar);
    for(let index = 0; index<ar.length; index ++){
        const element = ar[index];
        
        ar[index] = element * element;
  
        
    }
    console.log(ar);

}
console.log(ar);
multipicaton(ar);
console.log(ar);
