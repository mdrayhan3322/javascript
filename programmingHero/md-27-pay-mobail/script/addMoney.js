
document.getElementById('add-money').addEventListener('click',
    function(event){
        event.preventDefault();
        const amount = document.getElementById('amount').value;
        // console.log(typeof amount);
        const convertedAmount = parseFloat(amount);
        // console.log(typeof convertedAmount);
        const pin = document.getElementById('pin').value;
        // console.log(typeof pin);
      
        const convertedPin = parseInt(pin);
        // console.log(typeof convertedPin);
    
        const mainBalance = document.getElementById('main-balance').innerText;
       
        const convertedMainBalance = parseFloat(mainBalance);
        // console.log(typeof convertedMainBalance) ;
       

        if(convertedPin === 1234){
            const sum = convertedMainBalance + convertedAmount;
            document.getElementById('main-balance').innerText = sum;
         
        }
        else{
            console.log('pin pawa jai ni');
        }


})