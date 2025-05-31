
function one(){
    console.log('A');
    tow();


}
function tow(){
    three();
    console.log('B');

}
function three(){
    console.log('C');
}
one();