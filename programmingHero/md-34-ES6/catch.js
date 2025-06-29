


// const  lodeData = ()=>{
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(Data => console.log(Data))
//     .catch(error => console.log(error));

// }
// lodeData();

// creat a promies //=======================

const fetchData = () =>{
    return new promise ((reslove,reject) =>{
        const statas = true;
        if(statas){
            reslove ({name: 'rayhan'});
        }
        else {
            reject('server error');
        }

    })
}
fetchData()
.then(res =>  console.log(response))
.catch(err => console.log(err));