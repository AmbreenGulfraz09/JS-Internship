//An event is like signal that indicates that something has happen
//some important events are : mouse events, keyboard events,form element events, document events
//1st example
let a = document.getElementsByClassName("container")[0]
a.onclick=()=>{
    let b = document.getElementsByClassName("container")[0]
    b.innerHTML = "hello World"
}

 //****Adding event listeners */
 //2nd example
 btn2.addEventListener('click',function (e){
   let a = document.getElementById("btn2")
   a.style.color ="white"
   a.style.background ="red"
   a.innerText='Clicked'
 })


//addEventListener is used to assign multiple handlers to an event
//3rd example
let x= function (e){
  console.log(e.target)
  document.getElementById("btn").style.color="white"
  document.getElementById("btn").style.background="blue"

  }
// let y=  function (e){
//    alert("hello 2")
//   }
  btn.addEventListener('click',x)
//   btn.addEventListener('click',y)

//   let d = prompt("what is your favorite number?")
//   if( d =="2"){
//     btn.removeEventListener('click',y)
//   }