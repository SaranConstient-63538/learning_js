// const ele = document.activeElement.tagName;//activeElement property returns the HTML element that have focus.
// document.getElementById('demo').innerHTML = ele ;

// document.addEventListener("click", function(){ //Syntax document.addEventListener(event, function, Capture)
//     document.getElementById('demo').innerHTML = "Hello world";
// })

// const myframe = document.getElementById('myframe');
// const h1 = myframe.contentWindow.document.getElementById('H1')[0];

// const node = document.adoptNode(h1);
// document.body.appendChild(node);

let uri =document.baseURI;
let url = document.URL;
console.log(url,uri)
// document.getElementById('demo') .innerHTML = url;
document.getElementById('demo1') .innerHTML = uri;

document.title;
console.log(document.title)
console.log(document.scripts[0]);
console.log(document.scripts.item(0));
console.log(document.readyState);
console.log(document.referrer);
console.log(document.normalize())