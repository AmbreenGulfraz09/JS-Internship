// let id1 = document.getElementById("id1")
// console.log(id1)
// console.log(id1.matches(".box"))//kya yh is class sy match krta ha yh nhi
// //return true ir false..APNY 1 element liya hua tha apny yh dekhna ha k CSS selector sy wo match krta ha ya nhi 

// //CLOSEST(), look for the nearest ansector that matches the given CSS selcctor
// console.log(sp1.closest(".box"))

// //CONTAINS(): if element A is in element B , then it returns true, otherwise false
// console.log(id1.contains(sp1))

// console.log(document.getElementsByTagName("span")[0])//show whole span line
// console.dir(document.getElementsByTagName("span")[0])// only span tag..(dir() shows js objects)
// console.log(document.body.firstElementChild.nodeName)// only tag name

// //INNER HTML
// console.log(first.innerHTML)
// first.innerHTML = "<i>hey i am italic<i>"

// GET HTML inside the element as a string
//only valid Element nodes not for text or comment node

//OUTER Element: full HTML(inner + element itself)
//console.log(first.outerHTML)
//first.outerHTML = "<div>hey</div>"

//TEXT CONTENT
console.log(document.body.textContent)// as text pory page ko copy kiya ja skta ha

//Hidden properties
// $0.hidden= false  // unhide the hidden content