console.log("mara ka");
console.log(document.body);
 const lilist = document.getElementsByTagName('li');
//  console.log(lilist);
for(const a of lilist){
    console.log(a);
}
for(const a of lilist){
    console.log(a.innerText);
}

const allHeader = document.getElementsByTagName('h1');
for(const h1 of allHeader){
    console.log(h1);
}
