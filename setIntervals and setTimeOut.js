//****Set interval and set timeout in JS*/

//document.write("Hello")
// //if i want to do any task after some given time, i will use setTimeout
// let a = setTimeout(() => {
//     alert("I am inside of setTimeOut")
// }, 4000);//2000ms equals 2 sec

// let b = prompt("Do you want to run the setTimeOut?")
// if("no" == b){
//     clearTimeout(a)//cancelling the execution of above timeout
// }
// console.log(a)

const sum = (a,b) =>{
    console.log("Yes,I am running", (a + b))
}
//setTimeout(sum,1000,1,2)//function name, timer, argument 1 , argument 2

//Set Interval: task will continue to execute after that interval
setInterval(function(){
    //alert("Interval running")
},3000)

const product = (a,b) =>{
    console.log("I am running aftr interval ", (a * b))
}
setInterval(product,3000,2,3)
clearInterval()