
const ar = [1000, 2000, 725]
function  calculateWatchTime( times ) {
    let count = 0;
    for(const time of times){
        count += time;
        
    }

    const h  =  count / 60; 
    const m  =   h /60;
    const s  =  m / 60; 

    const obj ={
        hour:1 , minute: 2, second:5 
    }
    return obj;
  
}

const ans = calculateWatchTime(ar);
console.log(ans);


