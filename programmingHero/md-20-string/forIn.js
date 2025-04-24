

const mobail={
    name : 'oppo',
    camra : '12mp',
    color : 'white',
    isNew : true,
    price : 2500 
}
/** of array tr babohar kora hoi
 *  in Object a babohar kora hoi
 */
// for(const value in mobail){
//     console.log(value);
// }

// ---------------------------------
const keys = Object.keys(mobail);
console.log(keys);
for(const key of keys){
  
    console.log( key+' => '+mobail[key]);
}
