//walking in DOM
// whenever we access any HTML document and try to manipulate its elements by JS


//accessing child
// console.log(document.body.firstChild)// which is comment so that is text node
// console.log(document.body.lastChild)// script
//console.log(document.body.childNodes)// list of all nodes

// let arr = Array.from(document.body.childNodes)
// console.log(arr)

//parents and siblings
//console.log(document.body.firstChild)
//let a = document.body.firstChild;
//console.log(a.parentNode)
//console.log(a.parentElement)
//console.log(a.firstChild.nextSibling)

//Element Only navigation

let b = document.body
console.log("first child of b: " , b.firstChild)
console.log("first element child of b: " , b.firstElementChild)//element hi mily ga spaces nhi include hu gi
//jb ap directly elements ko access kr rhy hoty hai, us ma spaces and comments ko ignore kr rhy hoty hai to yh hoti ha element only navigation
// like: document.previousElementSibling
//document.nextElementSibling
//document.firstElementSibling
//document.LastElementSibling

const changeBody =()=>{
   document.body.firstElementChild.style.background = "red"  
}