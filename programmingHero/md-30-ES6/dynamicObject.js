// const person = {
//     name:'ryahan',
//     age :19,
//     contry:'bangladesh'
// };
// console.log(person.contry);
// console.log(person['age']);

// for(let key in person){

//      console.log(`key: ${key} value: ${person[key]}`);
// }

// ---------------------------------------------


const person = {
    name:'ryahan',
    age :19,
    contry:'bangladesh'
};
// for(let key of Object.entries(person)){
//     console.log(key);
// }

for(let [key,value] of Object.entries(person)){
    console.log(`key: ${key} value: ${person[key]}`)
}