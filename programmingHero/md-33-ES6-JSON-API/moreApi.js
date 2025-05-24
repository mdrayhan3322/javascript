
/*
const handleLoade = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>{
        console.log(data);
        displayUser(data);
    })
}
const displayUser = (user)=>{
    console.log(user[0]);
}
*/
// -------------------------------------------------
const handleLoade = ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>{
        displayUser(data);
    })
}
const displayUser = (users)=>{
     const ulcontainers =  document.getElementById('ulContainer');
     for(const user of users){
        // console.log(user.name);
        const li = document.createElement('li');
        li.innerText = user.name;
        ulcontainers.appendChild(li);
       
        
     }
    
}