

const person = {
    name : "rayhan",
    age  : 32,
    friend: ['jobair','masud','jahid','nijam','samsuddin']
};
console.log(typeof person); /* person holo akta object */

const convertedPerson = JSON.stringify(person); /* object k JSON  a converted kora holo */
console.log(convertedPerson)
/* abat JSON the k object a converted kora holo nice */
const convertedObject =  JSON.parse(convertedPerson);
console.log(convertedObject);

