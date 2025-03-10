


const str = "1zihad@gmail.com";


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
const ans = validEmail(str);
console.log(ans);



