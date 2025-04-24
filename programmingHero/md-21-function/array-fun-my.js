
function arrayTotalSum(number){
    console.log(number);
    let sum = 0;
    for(let numbers of number){
        console.log(numbers);
        sum = sum+numbers;
    }
    return sum;

}
const ar = [10,20,30,40,50];
 const sum = arrayTotalSum(ar);
 console.log('array all number sum is ---->  ',sum);
