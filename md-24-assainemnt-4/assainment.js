

 
nehal_015


 function cashOut( money ) {
    if(money >0){
        const cashOoutFee = money*1.75/100;
        return cashOoutFee;

    }
    else if(money <0){
        return  st = `"Invalid"`;
    }
    else{
        if(typeof(money) === `string`){
            return str = `"Incalid"`;
        }
    }
    
  
}
console.log(cashOut(1000));




function validEmail(email) {
    if(typeof email !== "string"){
        return false;
    }

    if (email.substring(0, 1) === '.' || email.substring(0, 1) === '-' || email.substring(0, 1) === '_' || email.substring(0, 1) === '+' || email.substring(0, 1) === '@') {
        return false;

    }

    if (!email.includes('@')) {

        return false;
    }
    if (email.includes(" ")) {
        return false;
    }

    if (email.slice(-4) === ".com") {
        return true;
    }

}





function  electionResult( votes ) {
    let man = 0;
    let ban = 0;
    let jal = false;
for(let i=0; i<votes.length; i++){
  
    if(votes[i] === "mango"){
        man++;
    }
    else if(votes[i]==="banana"){
        ban++;
    }
    else jal = true;

}
if(man > ban){
    return {win:"mango",jal};
} 
else if(man === ban){
    return {win:"draw",
            jal};
}  
else return {win:"banana",jal};
   
}





function  isBestFriend( f1 , f2 ) {
    if(typeof f1 === "object" && typeof f2 === "object"){
        return "Invalid"
    }
   
    if(f1.bestFriend === f2.roll && f2.bestFriend ===f1.roll){
        return true;
    }
    else return false;
    
}



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
 

