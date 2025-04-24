


const str =" kingyahoo.com";

 function  validEmail( email ) {
    
    if(email.substring(0,1) === '.' || email.substring(0,1) === '-' || email.substring(0,1) === '_' || email.substring(0,1) === '+' || email.substring(0,1) === '@'){
        return false;

    }

    else if(email.includes('@') === true){
       
        return true;
    }
    else if (email.includes(" ") === true){
        return false;
    }

    else if(email.slice(-4) === ".com"){
        return true;
    }


    else {
        if (typeof email === "string"){
            return true;
           
         
        }
        else{
            return `"Invalid"`
        }

    }

 
}
const ans = validEmail(str);
console.log(ans);






