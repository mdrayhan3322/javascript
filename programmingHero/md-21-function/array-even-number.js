

function arrayEvenNumber(array){
    const evenArray =[];
    
    for(const number of array){
        if(number % 2 === 0){
            evenArray.push(number);
        }
    }
    return evenArray;
}
const ar =[10,15,11,22,31,53,434];

const newArray =  arrayEvenNumber(ar);
console.log(newArray);
