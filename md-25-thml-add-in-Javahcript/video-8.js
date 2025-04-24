console.log("mama ami akani add hoi lam");
// 1--- kotai add korte hobe ta age korte hove
const addedlist = document.getElementById('liAdd');
// 2--- ki add kor te hobe ta dete hobe
const li = document.createElement('li');
// 3-- tag ar betore ki text debe ta lekte hobe
li.innerText='mama ami ul ar beto li hoi add holam';
// 4--- tar por tag ta k add korte hove 
addedlist.appendChild(li);

const header = document.getElementById('liAdd');
const h = document.createElement('h1');
h.innerText='kaga ami header add holam';
header.appendChild(h);
console.log('-------------------------------------------');

const mainSection = document.getElementById('mainContainer');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = 'Food header section';
section.appendChild(h1);

const ul = document.createElement('ul');

const li1 = document.createElement('li');
li1.innerText = 'kasse mama';
ul.appendChild(li1);

const li2 = document.createElement('li');
li2.innerText = 'peaju mama';
ul.appendChild(li2);

const li3 = document.createElement('li');
li3.innerText = 'borhani mama';
ul.appendChild(li3);

section.appendChild(ul);
mainSection.appendChild(section);


