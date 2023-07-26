// Conditional Expressions
let a = prompt("what's your age: ") // always take values in string
a = Number.parseInt(a) // converting into integer
//console.log(typeof a)
if(a < 0){
  alert("Age is invalid")
}
  else if(a < 9){
    alert("You are a kid, you are not allowed to use this website")
  }
   else if(a < 18 && a>9 ){
    alert("You can use it after 18")
  }
else{
  alert("Your age is valid,Please proceed")
}

console.log("you can ", (a<18? "not drive ": "drive"));