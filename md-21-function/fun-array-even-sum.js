

function funArrayEvenSum (numbers){
    console.log(numbers);
    let evenNumber = 0;

    for(const number of numbers){
        if(number % 2 === 0){
            evenNumber = evenNumber + number;
        }
    }
    return evenNumber;

}
const ar = [10,11,12,13];
const evenNumber =  funArrayEvenSum(ar);
console.log('total sum evenNumber is ----------> ',evenNumber);