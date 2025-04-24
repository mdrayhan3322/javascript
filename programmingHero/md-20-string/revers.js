const sentenst = 'I am  learning web deve.';

// for(const later of sentenst ){
//     console.log(later);
// }

// ---------------------

// let reverse = ''
// for(const later of sentenst){
//     console.log(later);
//     reverse = later + reverse;

// }
// console.log(reverse);

// ---------------
// for(let i=0; i<sentenst.length; i++){
//     console.log(sentenst[i]);
// }

// let rev = '';
// for(let i =0; i<sentenst.length; i++){
//     const leter = sentenst[i];
//     console.log(leter);
//     rev = leter +rev;
// }
// console.log(rev);

// ---------------------------
const reversed = sentenst.split('').reverse().join('');
console.log(reversed);