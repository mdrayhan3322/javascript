
document.getElementById('login-btn').addEventListener('click',
    function(event){
        event.preventDefault();
        const acconNumber = document.getElementById('Acount-number').
        value;
        const pin = document.getElementById('pin').value;
        // console.log(typeof pin);
        const convertedPin = parseInt(pin);
        if(acconNumber.length === 11 ){
         
            if(convertedPin === 1234){
                // console.log('pin tik ase');
                window.location.href="./main.html";
            }
            else {
                // console.log('pin tik nai');
                alert('pin tik nai');
            }
        }
        else{
            alert('your account in balid');
        }
        
    }
)