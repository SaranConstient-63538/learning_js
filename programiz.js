let today = new Date();
let day = today.getDay();
let date = today.getDate();
let month = today.getMonth()+1;
let year = today.getFullYear();
let daylist = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];

let hour = today.getHours();
let min = today.getMinutes();
let sec = today.getSeconds();
console.log(`${hour}:${min}:${sec}`);

today = date +'-'+ '0'+month +'-'+ year;
console.log(today)
console.log(daylist[day]);
console.log(`Today Time: ${hour}  ${hour >= 12 ? 'PM': 'AM'} : ${min} : ${sec}`)

// console.log(window.print())
let side = 5;
let side1 = 6;
let side2 = 7;
let s = (side + side1 + side2)/2
let result =Math.sqrt(s*((s- side)*(s-side1)*(s-side2)))

console.log(result)
console.log(year%100 === 0 , year%400 === 0 , year%4 === 0)

str = 'w3resource';
console.log(str.length)
let guid =(len)=>{
 let arr =[]
 let char = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
 let charlen = char.length;
 let length = len || 32;

 for ( var i=0; i<length;i++){
    let ran = Math.random() * charlen;
    let floor = Math.floor(ran)
    arr[i] = char.charAt(floor);
    // console.log(arr[i]);
 }
 return arr.join('');

}
console.log(guid(15))
let  strs = 'JS string exercises';
console.log(strs.endsWith('exercises'))
console.log(strs.startsWith('js'))

function humanize(number) {
    console.log(number % 100 >= 11  )
    console.log(number % 100 <= 13  )
    if(number % 100 >= 11 && number % 100 <= 13)
        return number + "th";
    
    switch(number % 10) {
        case 1: return number + "st";
        case 2: return number + "nd";
        case 3: return number + "rd";
    }
    
    return number + "th";
}
console.log(humanize(14));
// console.log(humanize(20));
// console.log(humanize(305));

let strs1 ='Python'
console.log(strs1.toLocaleLowerCase(),strs1.length);
console.log((strs1.substring(3,5)).toUpperCase());//strs1.substring(start,end)

console.log(strs);
console.log(strs.length);
let strlower = strs.toLowerCase()
let strlowesr = strs.toLowerCase().substring(4,15)
console.log(strlower,strlowesr);
console.log(strlowesr.toUpperCase());

var string = "Robin Singh";
let splitName = string.trim().split("");
if(splitName.length > 1){
    console.log(splitName[0] + " " + splitName[1].charAt(0)+ '.');
}
console.log(string.trim().split(""),string.length);

// let str1 = '3132';
// console.log(str1.toString(), typeof str1,str1.length);
// let strs2 = str1.toString();
// let strss =''
// for(var i=0; i< str1.length;i+=2){
//     strss += String.fromCharCode(parseInt(str1.substring(i,2),16));
// }
// console.log(strss);

function hex_to_ascii(str1){
    var hex = str1.toString();
    var str = " ";
    for(var n = 0; n < hex.length; n+=2){
        str += String.fromCharCode( parseInt(hex.substr(n,2),16)); //hex.substr(start, length);
        console.log(str);
    }
    
    return str;
}
hex_to_ascii('313030');


function countTrue(arr){
    var vals = 0;
    for (var i=0; i<arr.length; i++){
        // console.log(arr[i])
        if(arr[i] === true){
            vals  += 1;
            console.log(vals)
        }
    }
    return vals;
}
countTrue([true, false, false, true, false])
function firstFactorial(num){
   
    let val1 = 1;
    for(var i=1;i<num;i++){
       val1 *= i        
    }
    let val = val1 * num
    return val;
}
firstFactorial(8)

function firstReverse(str){
    console.log(str,str.split('').reverse());
     var arrStr = str.split('').reverse()
    var strs = [];
    
    console.log(arrStr);
    for(var i=0; i<arrStr.length;i++){
        strs += arrStr[i].charAt(0)    
    }
    console.log(strs);
    // return str
}
firstReverse('coderbyte')