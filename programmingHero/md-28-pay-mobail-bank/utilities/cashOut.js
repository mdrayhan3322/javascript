document.getElementById('cashout-btn').addEventListener('click',
    function(event){
        event.preventDefault();
        const accounNumber = document.getElementById('Cash-out-count-number').value;
        const amount = getInputValueId("cashout-amount");
        const pin = getInputValueId('cashout-pin');
        const mainBlaance = document.getElementById('main-balance').innerText;
   


        if(accounNumber.length === 11){
          if(pin === 1234){
            const sum = mainBlaance -  amount ;
            setInnerTextByIDandValue('main-balance',sum);
            
          }
          else alert('tomar pin tik nai');
        }
        else console.log("tomar accoun tik ni");
  

    }
)