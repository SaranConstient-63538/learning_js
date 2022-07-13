//string
const string1 = "A string primitive";
const string2 = 'Also a string primitive';
const string3 = `Yet another string primitive`;
console.log(typeof string1);
console.log(typeof string2, string2);
console.log(typeof string3);

const string4 = new String("A String object");
console.log(string4 instanceof String)

console.log('cat'.charAt(0), 'cat'[2])

let obj ={};
console.log(obj)
Object.defineProperty(obj, 'property',{
    value: 42,
    writable: false
});
obj.property =58;

console.log(obj.property);
let obj1 ={
    a: 'somestring',
  b: 42,
  c: false
}
console.log(Object.keys(obj1))
