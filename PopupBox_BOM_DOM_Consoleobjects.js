/*
console.log("console")
console.info("info")
console.warn("warn")
console.error("error")
console.assert("err" != false)
console.assert("err" == false)

console.time("forLoop")
for(let i=0;i<5;i++){
    console.log(233)
}
console.timeEnd("forLoop")

// Alert , confirm and prompt are pop up boxes

alert("what's your age ?")
//let a = prompt("Enter your name here")
let a = prompt("Enter your age here","20")
 a = Number.parseInt(a);
alert("You entered age of type: "+ (typeof a))
let write = confirm("Do you want to write it to the page?")
if(write){
    document.write(a)
}
else{
    document.write("You didn't Allowed ☹")
}
// but they have disadvantage , they paused the 
// java script execution and you can't modify it
*/
//Window is global Objects having methods to control whole browser, DOM, BOM and JS core features
/*
DOM: Document object model :
  ... Yh 1 tree ki form ma HTML elements ko represent krta ha 
  basically yh 1 standard ya interface hota ha , jo ap k pory HTML document ko 1 JS object ki trah treat kr rha hota ha, 
  and phr JS us object ko use krty huy,HTML elements ko access kr skta ha, update kr skta ha, add kr skty hai , 
  events apply kiye ja skty hai HTML elements k opr 
  */


// console.log(window)
// console.log(document)
// document.body.style.backgroundColor="aqua"
/*
BOM : browser object Model
allows JS to interect with browser, specifically jo browser related chezia hai na umhi sy deal kry ga like:
screen: width , hieght , depth, etc ab in functions k liye hmai window object ni use krna pry ga
represents additional objects provided by the host browser, 

POP up boxes are part of BOM, -ie- ap chahty ho k user 1 button py
click kry to ap -ie- google k page py chly jao to yh kam BOM sy ho ga
so simply they deals with everything outside the page
window objects are part of BOM
*/



