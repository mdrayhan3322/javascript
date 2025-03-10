
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




   





