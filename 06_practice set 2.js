//practice exercise of operators and expressions
/*Q1
 let age = prompt("Entre your age: ")

 if(age>10 && age <20){
  alert("Age lies between 10 and 20")
}
 else{
    alert("Age doesnot lies between 10 and 20") 
}


//q2
let num = prompt("Entre any number: ");
num = Number.parseInt(num);

if(num % 2== 0 && num%3 == 0){
  console.log("Divisble by 2 and 3")
}
else{
  console.log("Not Divisble by 2 and 3")
}
*/
//q3
let num = prompt("Entre any number: ");
num = Number.parseInt(num);

if(num % 2== 0 || num%3 == 0){
  console.log("Divisble by 2 and 3")
}
else{
  console.log("Not Divisble by 2 and 3")
}

//Q4
let age = prompt("Entre your age: ")
age = Number.parseInt(age)
console.log("You can", (age>18?  "drive" :"Not drive"))
