document.getElementById('cashout').style.display='none';

document.getElementById('add-money-box').addEventListener('click',
    function(){
        document.getElementById('addmoney').style.display='block';

        document.getElementById('cashout').style.display='none';

    }
)
// cashout section
document.getElementById('cashout-box').addEventListener('click',
    function(){
        document.getElementById('addmoney').style.display = 'none';
        document.getElementById('cashout').style.display = 'block';
    }
)
// input value chaken section
document.getElementById('add-money').addEventListener('click',
    function(event){
        event.preventDefault();
        const accounNumber = document.getElementById('Acount-number').value;
        const pinNumber = document.getElementById('pin').value;
        const convertedPinNumber = parseInt(pinNumber);
        const amountNumber = document.getElementById('amount').value;
        const convertedAmountNumber = parseFloat(amountNumber); 
        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseFloat( mainBalance);

       

        if(accounNumber.length === 11){
            if(convertedPinNumber === 1234){
                const sum = convertedMainBalance + convertedAmountNumber;
                document.getElementById('main-balance').innerText = sum;

               
            }
            else alert('tomar pin number tik nai');
           
        }
        else console.log('tomar pin tik nai');
      
    }
)