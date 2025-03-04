const price = 4000;
if(price >= 5000){
    // 10%
    const ten = price *10 /100;
    console.log(ten);
    const totalPrice = price - ten ;
    console.log(totalPrice);
}
else if(price >= 2500){
    // 5%
    const five = price *5 /100;
    console.log(five);
    const fivePersent =price - five;
    console.log(fivePersent);


}
else console.log("cont condetion");