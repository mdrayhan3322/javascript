
function person1(){
    console.log('Tea ready person 1');
};
function person2(){
    console.log('julmure ready person 2');
};

function person3(){
    setTimeout( ()=>{
        console.log('fuch ka ready person 3');
    },10000);
};

function person4(){
    console.log('julmure readay person 4');

};

function person5(){
    setTimeout( ()=>{
        console.log('fuch ka readay person 5');
    } ,2000);
};

person1();
person2()
person3()
person4()
person5()