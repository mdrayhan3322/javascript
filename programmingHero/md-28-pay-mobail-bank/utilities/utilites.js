// input value k number a convert korar functin
function getInputValueId(id){
  const value = document.getElementById(id).value;
  const convertedValue = parseFloat(value);
  return convertedValue;
  
    
}
// innerText k number a conver korar function 
function getInnerTextById(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function setInnerTextByIDandValue (id, value){
    document.getElementById(id).innerText =value;

}
// section hite na none  and block korar jonno  
function handleToggle(id , status){
  document.getElementById(id).style.display =status;
}