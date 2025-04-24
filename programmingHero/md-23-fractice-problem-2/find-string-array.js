
const patreList =["hena","mohona","kajuli","juluke","moure","hasena","pkira"];
function putereName(allPatre){
    let pemPatre =[];   
    for(let i=0; i<allPatre.length; i++){
        const patre = allPatre[i];
        if(patre.includes("h")){
            pemPatre.push(patre);
        }

    
    }
    return pemPatre;

}
const patrePaisi =putereName(patreList);
console.log(patrePaisi);