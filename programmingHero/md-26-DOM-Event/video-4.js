document.getElementById('chinge-title')
.addEventListener('click', function (){
    const pageTitle = document.getElementById('page-title');
    pageTitle.innerText='chine title';
    
})
// ------------------------------------------
document.getElementById('logEnButton')
.addEventListener('click',function(){
    const loginPage = document.getElementById("title-ching-tag");
    loginPage.innerText= 'user loggend in successfule';
})
// ------------------------------------------------
document.getElementById('btn-order')
.addEventListener('click',function(){
 const inpuTtipe =document.getElementById('puotId')
 const a = inpuTtipe.value;
 const abc = document.getElementById('header-ching-text');
 abc.innerText=a;
 
})