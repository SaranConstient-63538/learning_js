//let or var or const
// const PI =3.14;
// console.log(PI);
// // PI = 10;
// // console.log(PI);

// for(var i = 0; i < 5; i++) {
//     console.log(i); // 0,1,2,3,4
// }

// let letters = ["a", "b", "c", "d", "e", "f"];


// for(let letter of letters) {
//     console.log(letter); // a,b,c,d,e,f
// }
// for(let lett in letters) {
//     console.log(letters[lett]); // a,b,c,d,e,f
// }
// let sortNames = (...names)=>{
//     console.log(names);
//     return names;
// }
// sortNames("Sarah", "Harry", "Peter")

// let fruits = ["apple",'mango'];
// let [a,b] = fruits;

// console.log(a,b)


//string

let text = "Hello world, welcome to the universe."
console.log(text.indexOf('world'),text.indexOf('e',3));
let text1 = "Hello planet earth, you are a great planet.";
console.log(text1.lastIndexOf('planet'))



//array methods
//concat()
let firstArr = [2,3,5,7]
let secondArr = [2,4,6,8]
let thirdArr = [2,4,6,8]
console.log(firstArr.concat(secondArr,thirdArr));
// console.log(firstArr.constructor())

//valueOf()
console.log(firstArr.valueOf());// method returns the array itself.
//unshift()
const fruits = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruits.length);
fruits.unshift("Lemon","Pineapple");// method adds new elements to the beginning of an array.
console.log(fruits);
console.log( fruits.shift());//method removes the first item of an array.
console.log(fruits);
const fruit = fruits.slice(1,3)// method returns selected elements in an array, as a new array.
console.log(fruit);
const ages = [3, 10, 18, 20];
console.log(ages.some(checkAdult));// method returns true (and stops) if the function returns true for one of the array elements.
function checkAdult(ages){
    return ages >18
    
}
firstArr.sort((a,b)=> {//return array with the items sorted
    return a-b
})
console.log(firstArr.sort((a,b)=> {return a-b}),firstArr[firstArr.length-1],firstArr[0])//sorts the elements of an array.
console.log(firstArr.sort((a,b)=> {return b-a}))//Sort numbers in descending order and lowest number
console.log(fruits.splice(2,0,"Lemon", "Kiwi"));//method adds and/or removes array elements.
console.log(fruits.splice(2,2));//method adds removes array elements.

console.log(fruits.toString())//  method returns a string with array values separated by commas.
console.log(fruits.toLocaleString());
aa = 1234
console.log(aa.toString());//  method returns a string with array values separated by commas.
console.log(aa.toLocaleString());

console.log(fruits.reverse());// method reverses the order of the elements in an array.
let ageGroup = [18, 21, 1, 1, 51, 18, 21, 5, 18, 7, 10];
let uniqueAge = ageGroup.reduce(function(accumulator,currentValue) {// method executes a reducer function for array element.
    // console.log(accumulator.indexOf(currentValue) === -1);
    if(accumulator.indexOf(currentValue) === -1){
        // console.log('yes');
        accumulator.push(currentValue)
    }
    // console.log(accumulator)
    return accumulator
},[])
let dumy = ageGroup.reduceRight(( accumulator, currentValue) => {
   
    return accumulator + currentValue;
})

console.log(uniqueAge)
console.log(dumy)

console.log(fruits.push("Kiwi"),fruits); // method adds new elements to the end of an array.

console.log(fruits.copyWithin(2,0,2))//array.copyWithin(target, start, end) method copies array elements to another position in the array.

let fru = fruits.entries();//array.entries() An array with key/value pairs.
for (var arrc of fru){
    console.log(arrc)
}
console.log(ages.every((age)=>{
    return age >16
    } ))
// console.log(fru)
//values(),

let a = Math.round(5.49);
let b = Math.round(4.5);
let c = Math.floor(5.99);
let d = Math.ceil(4.01);
console.log("round:" + a,"round:" + b,"floor:" + c,"ceil: " +d)