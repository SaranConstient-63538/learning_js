//navigator properties
// console.log(navigator.language);//return to string
// console.log(navigator.languages);//return to string[]
// console.log(navigator.buildID);//return the build identifier of browser

// console.log(navigator.clipboard);// methods read(), readText(), write(), writeText()
// console.log(navigator.cookieEnabled)// boolean value
// function success(pos){
//     console.log(pos.coords.latitude);
//     console.log(pos.coords.longitude);
//     console.log(pos.coords.accuracy)
//     // console.log(crd.la)
// }
// function error(err){
//     console.log(err.code+" "+ err.message)
// }
// navigator.geolocation.getCurrentPosition(success,error)
// navigator.geolocation.watchPosition(success );

//window
let frame = document.getElementById('myframe')
console.log("Url:",document.URL)
console.log("documentURI:",document.documentURI)
console.log("title:",document.title)
console.log("CharacterSet:",document.characterSet)
console.log("childElementCount:",document.childElementCount)
console.log("childNodes:",document.childNodes)//nodelist(2)[<Doctype html>, html]
console.log("Children:",document.children)//htmlCollection[html]

console.log("body:",document.body)
console.log("visibilityState:",document.visibilityState )
console.log("contentType:",document.contentType)
console.log("currentScript:",document.currentScript)
console.log("Scripts:",document.scripts);
console.log("compat mode:",document.compatMode)
console.log("design mode:",document.designMode)
console.log("active element:",document.activeElement)
console.log("document element:",document.documentElement)
console.log("first element child:",document.firstElementChild);
console.log("first child:",document.firstChild)
console.log("doctype:",document.doctype)
console.log("direction:",document.dir)
console.log("embeds:",document.embeds);//htmlCollection []
console.log("feature policy:",document.featurePolicy )
console.log("fonts:",document.fonts);
console.log("forms:",document.forms);
console.log("full screen element:",document.fullscreenElement);
console.log("full screen enabled:",document.fullscreenEnabled);
console.log("head:",document.head);
console.log("hidden:",document.hidden);
console.log("last modified:",document.lastModified);
console.log("last element child:",document.lastElementChild);
console.log("last child:",document.lastChild);
console.log("images:",document.images);
console.log("implementation:",document.implementation)
console.log("links:",document.links)
console.log("location:",document.location)
console.log("scrolling element:",document.scrollingElement)

console.log("readyState:",document.readyState);
console.log("referrer:",document.referrer);
console.log("plugins:",document.plugins)
console.log("pointerLockElement:",document.pointerLockElement)
console.log("pictureInPictureElement:",document.pictureInPictureElement);
console.log("pictureInPictureEnabled:",document.pictureInPictureEnabled)


//windows method
console.log(document.createComment('This is a not-so-secret comment in your document'))
console.log(document.open())
console.log(document.close());
console.log(document.createAttribute());