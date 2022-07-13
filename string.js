console.log(Boolean(10>9))
let bool =false;
console.log(bool.valueOf())
console.log(typeof bool.toString())
console.log(bool.constructor)
let a = true
Boolean.prototype.myColor = function (){
    if(this.valueOf() == true){
        console.log('green')
        return "green"
    }else{
        console.log('red');
        return 'red'
    }
}
a.myColor();
//class
class Car{
    constructor(brand){// special method for creating and initializing object created with in a class
        this.brand =brand;
    }
}
let car =new Car('Ford');
console.log(car);