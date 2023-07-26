//Promises
// promise is promise of code execution, notify you if code is successfully executed or not
let promise = new Promise(function(resolve, reject){
    alert("hello")
    resolve(56)
})

console.log("hello One")
setTimeout(function(){
    console.log("Hello two in 2 seconds")
},2000)
console.log("My name is Hello 3")
console.log(promise)