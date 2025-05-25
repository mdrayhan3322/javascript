
function asynchrenous (){
    console.log('ami potom');
    console.log("ami diti o ");
    // fetch asynchrenous hese be kaj kore
    fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(data => console.log(data));
// 
    console.log('ami last')
}
asynchrenous();