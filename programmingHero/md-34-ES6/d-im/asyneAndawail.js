
// const lodData = ()=>{
//     console.log("ami first");
//     console.log("ami second");
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(res =>res.json())
//     .then(data =>console.log(data));

//     console.log("ami four");
// }
// lodData();

// ----------------------------------------------

// const lodData = async ()=>{
//     console.log("ami prothom");
//     console.log("ami second ");

//     const patch = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     // console.log(patch);
//     const data  = await patch.json();
//     console.log(data);
//     console.log("ami foure")

// }
// lodData();

// ==================================
const lodData = async ()=>{
    try{
        console.log('ami prothom');
        console.log("ami second");
        const placeholder = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        console.log(placeholder);
        const data = await placeholder.json();
        console.log(data);
        console.log("ami fourth");
    }
    catch{
        console.log("error");
    }


}
lodData();