



const duplicate = ['rayhan', 'mamun', 'red','green','rayhan','red','green'];
const ar = [20,10,30,10,40,20,50,60];
function noDuplicate(duplicate){
    let update = [];
    for(const name of duplicate){
     
        if(update.includes(name) === false){
            update.push(name);


        }
    }
    return update;
}
const ans = noDuplicate(duplicate);
console.log(ans);

// -----------------------------------------------------------------------------------