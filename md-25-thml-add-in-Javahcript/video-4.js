

const selectorAll = document.querySelectorAll('.bratherName li');
console.log(selectorAll);
// console.log(selectorAll.innerText);
for(const a of selectorAll){
    console.log(a.innerHTML);
}
console.log('mama mara sobai akane');
for(const li of selectorAll){
  console.log(li.innerText);
}