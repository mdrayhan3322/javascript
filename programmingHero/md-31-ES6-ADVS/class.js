// class product {
//      a = "bangladesh";
//       constructor(name,price,color){
//       console.log(name,price,color);

//      }

// }

// ----------------------------------------
class product{
    constructor(name,price,brand){
        this.name=name;
        this.price=price;
        this.border= brand;
    }
    detels(){
        console.log('ami detels',this);
    }
}

const sumsong = new product('Iphone','50','somsong');
console.log(sumsong);
console.log(sumsong.name);

 sumsong.detels()