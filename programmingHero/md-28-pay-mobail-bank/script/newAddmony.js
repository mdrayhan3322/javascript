document.getElementById('add-money').addEventListener('click',
    function(event){
        event.preventDefault();
       const amount = getInputValueId('amount');
       const pin = getInputValueId('pin');
       
       const account = document.getElementById('Acount-number').value;
       const mainBalance = getInnerTextById('main-balance');
 
       if(account.length === 11){
        if(pin === 1234){
            const sum = mainBalance + amount;
            // document.getElementById('main-balance').innerText = sum;
            setInnerTextByIDandValue('main-balance',sum)
        }
        else console.log('tomar pin tik ani');
       }
       else console.log('tomar account tik nai');


    }
)