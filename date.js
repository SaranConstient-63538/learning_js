let date = new Date();
let dateMilliseconds = new Date(-24*3600*1000);
let dateString = new Date("2021-4-29")
console.log(date);
console.log(dateMilliseconds);
console.log(dateString);

console.log(date.getFullYear());
console.log(date.getMonth())

console.log(date.getDay());
console.log(date.getDate());
console.log(date.getHours());


function is_String(input){
    if(Object.prototype.toString.call(input) === '[object String]'){
        console.log('string');
        return true;

    }else if(Object.prototype.toString.call(input) === '[object Array]'){
        console.log('array');
        return true;

    }else if(Object.prototype.toString.call(input) === '[object Number]'){
        console.log('Number');
        return true;
    }else{
        return false;
    }    
}
// is_String('saran');
// is_String([1,2,3]);
// is_String(-252);
is_String( )
let is_Blank=(val)=>{
    console.log(val.length)
    if(val.length == 0){
        console.log('empty')
        return true;
    }else{
        console.log('is not empty');
        return false;
      
    }
}
is_Blank('sdf');
let str = "robin singh";
console.log(str.trim().split(""))
let  myColor = ["Red", "Green", "White", "Black"];
console.log(myColor.toString(),myColor.join())
let strdash = ['025468'];
let vals = strdash.toString('').split('')
console.log(vals);
for (var i=0; i<vals.length; i++){
    console.log(vals[i])
    if(vals[i]%2 === 0 && vals[i-1]%2 === 0){
        console.log(vals.push(i));
        // return vals[i+1].includes('-');
    }else{
        console.log(vals[i]);
    }
}
let obj=[ { id: 10, name: 'apple' }, { id: 20, name: 'orange' } ];
let indexOn = (arrs, key) =>{
    arrs.reduce((objs,v)=> {
        console.log(objs,key)
        let {[key]:id,...data} =v;
        arrs[id] = data;
        
        return arrs;
    });
}

console.log(indexOn(obj,x => x.id))