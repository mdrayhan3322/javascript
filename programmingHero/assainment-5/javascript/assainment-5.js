
// ---------------- caird section 1 -------------------------
document.getElementById('btn-one').addEventListener('click',
    function () {
        alert('Board updated Successfully');
        let t = new Date().toLocaleTimeString('en-BD', { timeZone: 'Asia/Dhaka' });
        document.getElementById('date-1').innerHTML = "You have Complete The Task Fix Mobile Button Issue  " + t;
        document.getElementById('btn-one').disabled = true;
    })
    // -------------------- caird section 2----------------------
    document.getElementById('btn-two').addEventListener('click',
    function () {
        alert('Board updated Successfully');
        let t = new Date().toLocaleTimeString('en-BD', { timeZone: 'Asia/Dhaka' });
        document.getElementById('date-2').innerHTML = "You have Complete The Task Add Dark Mode " + t;

    });
        // -------------------- caird section 3----------------------
    document.getElementById('btn-3').addEventListener('click',
    function () {
        alert('Board updated Successfully');
        let t = new Date().toLocaleTimeString('en-BD', { timeZone: 'Asia/Dhaka' });
        document.getElementById('date-3').innerHTML = "You have Complete The Task Optimize Home page  " + t;

    });    // -------------------- caird section 4----------------------
    document.getElementById('btn-4').addEventListener('click',
    function () {
        alert('Board updated Successfully');
        let t = new Date().toLocaleTimeString('en-BD', { timeZone: 'Asia/Dhaka' });
        document.getElementById('date-4').innerHTML = "You have Complete The Task Add new emoji " + t;

    });    // -------------------- caird section 5----------------------
    document.getElementById('btn-5').addEventListener('click',
    function () {
        alert('Board updated Successfully');
        let t = new Date().toLocaleTimeString('en-BD', { timeZone: 'Asia/Dhaka' });
        document.getElementById('date-5').innerHTML = "You have Complete The Task Integrate OpenAI API  " + t;

    });    // -------------------- caird section 6----------------------
    document.getElementById('btn-6').addEventListener('click',
    function () {
        alert('Board updated Successfully');
        let t = new Date().toLocaleTimeString('en-BD', { timeZone: 'Asia/Dhaka' });
        document.getElementById('date-6').innerHTML = "You have Complete The Task Improve Job searching  " + t;
        const placeBar = document.getElementById('place-bar').innerText;
        const convertedPlaceBar = praseInt(placeBar);
        const a = 6;
        const b = 1;
        if(convertedPlaceBar === a ){
            const sum = convertedPlaceBar - b;
            document.getElementById(placeBar).innerText = sum;

        }
        document.getElementById('btn-one').disabled = true;

    });


        // --------------------------------- clear history delet  ----------------------
    document.getElementById('history-btn').addEventListener('click',
        function(){
            document.getElementById('date-1').remove();
        }
    );
        document.getElementById('history-btn').addEventListener('click',
        function(){
            document.getElementById('date-2').remove();
        }
    )
    // -------------------------
            document.getElementById('history-btn').addEventListener('click',
        function(){
            document.getElementById('date-3').remove();
        }
    )
    // -----------------
        document.getElementById('history-btn').addEventListener('click',
        function(){
            document.getElementById('date-4').remove();
        }
    )
    // -------------------
           document.getElementById('history-btn').addEventListener('click',
        function(){
            document.getElementById('date-5').remove();
        }
    )
    // ---------------------
           document.getElementById('history-btn').addEventListener('click',
        function(){
            document.getElementById('date-6').remove();
        }
    )


    
// ------------------------ set date section -----------------

window.addEventListener('load',
    function () {
        document.getElementById('Date').innerHTML = new Date().toLocaleDateString('en-BD', { timeZone: 'Asia/Dhaka' });

    })

// -------------------------- html main file open --- stairt----------------------
document.getElementById('mainHtmlFile').addEventListener('click',
    function () {

        window.location.href = './main.html';
        

    })
// --------------------- back html index file from main html file



