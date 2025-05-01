document.getElementById('add-money').addEventListener('click',
    function(event){
        event.preventDefault();
       const amount = getInputValueId('amount');
       const pin = getInputValueId('pin');
       
       const account = document.getElementById('Acount-number').value;
       const mainBalance = getInnerTextById('main-balance');

       const selectedBank = document.getElementById('selected-Bank').value; 
       console.log(selectedBank);
    //    ---------- balance chak started--------------//
    if(amount < 0 ){
        alert("by apni mainas ta ka add kor te sen ata add hove na");
        return;
    }
     //    ---------- balance chak end--------------//
 
       if(account.length === 11){
        if(pin === 1234){
            const sum = mainBalance + amount;
            // document.getElementById('main-balance').innerText = sum;
            setInnerTextByIDandValue('main-balance',sum)

            // ----------------- histode added start ---------------//
            // -----------------------------------------------------------
            // const container = document.getElementById('transaction-box');
            // const p = document.createElement('p');
            // p.innerText = `added ${amount} from ${account} account `;
            // container.appendChild(p);
            // -------------------------------------------------------------
            const containeR = document.getElementById('transaction-box');
            const div = document.createElement('div');
            div.classList.add('bg-red-300');
            div.innerHTML = `
            <h1 class="bg-yellow-300">ADDed Money form  ${selectedBank}</h1>
            <h3>amount tk : ${amount}
           
            <p>account number : ${account}
            `;
            containeR.appendChild(div);
       

            // ----------------- hiltode added end---------------//

        }
        else console.log('tomar pin tik ani');
       }
       else console.log('tomar account tik nai');


    }
)