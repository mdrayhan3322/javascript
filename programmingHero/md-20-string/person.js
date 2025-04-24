
/* 

const person = {
    name : 'rayhan',
    age :22,
    profession:'deveoloper',
    salary: 2434343,
    married : false,
    'fav place': ['noakhali', 'kumillla']
}
console.log(person);

 */


const person = {
    name : 'rayhan',
    age :22,
    profession:'deveoloper',
    salary: 2434343,
    married : false,
    'fav place': ['noakhali', 'kumillla']
}
console.log(person.married);
const tam = person.married;
console.log(tam);
const ag = person['age'];
console.log(ag);
const na = person['name'];
console.log(na);
console.log(person['fav place']);




// -------------------
// update valu
person.age = 35;
person['salary'] = 30000;
person['fav place']= ['rayhan','mamun','kamrul'];
console.log(person['fav place']);