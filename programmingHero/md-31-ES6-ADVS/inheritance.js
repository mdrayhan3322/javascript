

class vehicole{
    constructor(name,price,model){
        this.name = name;
        this.price = price;
        this.model = model;

    }
    move(){
        console.log("mama ame move korte pare ");
    }
}

class Bus extends vehicole{
   constructor(name,price,set){
    super(name,price);
    this.set= set;

   }
}

const value =  new Bus ("Feni Line","20000",'50');
console.log(value.name);