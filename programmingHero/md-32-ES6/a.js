
function temporar(){
    let counter = 0;
    return function(){
       counter++;  /* jodi counter k kaj a na lagai tahole let = counter = 0 ati dilite hoie jabe */
      console.log(counter);
    }

}
 const add = temporar();
 add();
 add();
 add();
