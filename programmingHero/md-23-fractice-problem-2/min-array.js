
const ar = [15000, 20000,30000,12000,900,433000,3432,50000,13324,1000];
function minNumber(numbers){
    let num = numbers[0];
    for(const number of numbers){     
    if(number<num){
        num = number;

    }
}
return num;
}
    
const min = minNumber(ar);
console.log(min);