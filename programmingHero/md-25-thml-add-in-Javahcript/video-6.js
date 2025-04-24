console.log('masud balo hoe ja');
const sections = document.querySelectorAll('section');
// console.log(sections);
for(const section of sections){
    // console.log(section);
    section.style.border='2px solid green';
    section.style.marginBottom = '10px';
    section.style.marginLeft = '12px';
    section.style.borderRadius = '30px';
    // section.style.textAlign='center';
    // section.style.color = 'red';
}

const programming = document.getElementById('programmngNmae');
programming.classList.add('blue-bg');