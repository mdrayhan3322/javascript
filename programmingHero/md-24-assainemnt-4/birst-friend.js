


function  isBestFriend( f1 , f2 ) {
    if(typeof f1 === "object" && typeof f2 === "object"){
        return "Invalid"
    }
   
    if(f1.bestFriend === f2.roll && f2.bestFriend ===f1.roll){
        return true;
    }
    else return false;
    
}

const bestFriendOne ={
    name: "Rayhan",
    roll: 1,
     bestFriend: 2 



}
const bestFriendTwo ={
    name: "Jobar",
    roll: 2,
    bestFriend: 1 

}
const friend = isBestFriend(bestFriendOne,bestFriendTwo);
console.log(friend);


