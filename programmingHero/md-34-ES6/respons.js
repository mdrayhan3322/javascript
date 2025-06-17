
// respos
// const respons = ()=>{
//     // console.log("mama mai akane");
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(respons =>console.log(respons))

// }
// respons();

// ---------------------------------------------
// promis-----
// const respons = ()=>{
//     // console.log("mama mai akane");
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(respons =>console.log(respons.json()))
    

// }
// respons();

// ---------------------------------------



const func = ()=>{
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data));
}
func();