// dom selector techniques

// => getElementByClassName --> return HTMLCollections, no forEach
// -> Array.from(getElementByclassName()) --> converts to array
//  items= document.getElementsByClassName("listItem")
//  Array.from(items).forEach(x=>x.style.color="brown")

// => ById

//querySelector() --> return first result; takes parameter as element, class, id etc

//querySelectorAll() --> return nodeList.
//nodeList --> access via index; forEach can be applied
//  paras = document.querySelectorAll("p")
//  paras.forEach( (l) => l.style.color = "brown")
