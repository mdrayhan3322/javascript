/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/
let pament = 800;
let age = 12;
const student = true;
if(age <10){
    console.log("free teket");
}
else if(student){
    pament = pament *50 /100;
    console.log(pament)
 

}
else if(age >= 60){
    pament = pament *15 /100;
    console.log(pament);
   
}
else console.log(pament);

