document.getElementById('cashout-btn').addEventListener('click',
    function(event){
        event.preventDefault();
        const accounNumber = document.getElementById('Cash-out-count-number').value;
        const amount = getInputValueId("cashout-amount");
        const pin = getInputValueId('cashout-pin');
        const mainBlaance = document.getElementById('main-balance').innerText;
   
// main balance the ammount jode boro hoi tahole a code --//
        if(amount > mainBlaance){
          alert('mama tomar account a ato taka nai');
          return ;
        }

        if(accounNumber.length === 11){
          if(pin === 1234){
            const sum = mainBlaance -  amount ;
            setInnerTextByIDandValue('main-balance',sum);

            // cash out histo ri start ---------------
            const container = document.getElementById('transaction-box');
            const p = document.createElement('p');
            p.innerText = `cashout ${amount} from this ${accounNumber} account`
            container.appendChild(p);

            // cash out histo ri end ----------
            
          }
          else alert('tomar pin tik nai');
        }
        else console.log("tomar accoun tik ni");
  

    }
)