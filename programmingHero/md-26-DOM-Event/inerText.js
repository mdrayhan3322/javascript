

document.getElementById('btn-chaing-header').addEventListener('click',function(){
    
    const chaingHeader = document.getElementById('theHeader');
    chaingHeader.innerText = 'mama ama k pore bortor kore dela kaj ta tu mi thik koro nai arki ami tomare poredekenibo'

});

// ----------------------------
document.getElementById('btn-ching-para').addEventListener('click',function(){
   const p = document.getElementById('ami-pare');
   p.innerText='pppppp';
});

// =====================================================

document.getElementById('nameching').addEventListener('click',function(){
    const inputName = document.getElementById('input-text') ;
    const inputVlu = inputName.value;
    const para = document.getElementById('para');
    para.innerText = inputVlu;
})