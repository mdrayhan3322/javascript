
// console.log("mama ami prothom");
// console.log("mama ami second");
// setInterval( ()=>{
//     // console.log("hello");
// },3000);
// console.log("mama ami  fourth");

// =======================

let count = 0;
const clockID = setInterval( ()=>{
    count++;
    console.log(count);
    if(count >= 5){
        clearInterval(clockID);
    }

},2000)