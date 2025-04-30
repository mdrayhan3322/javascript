document.getElementById('login-btn').addEventListener('click',
    function(even){
        even.preventDefault();
       const accounNumber = document.getElementById('Acount-number').value;
       const pin = document.getElementById('pin').value;
       const convertedPinNumber = parseInt(pin);
       if(accounNumber.length === 11){
        if(convertedPinNumber === 1234){
            window.location.href="main.html";
        }
        else alert('tomar pin number tik nai');
      
       }
       else alert('tomar accon number tik nai');

    }
)