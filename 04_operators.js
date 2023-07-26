console.log("Operators in JS tutorial : 6")
//arithmetic operators
let a = 45;
let b = 5;
console.log("a + b : " , a+b)
console.log("a - b : " , a-b)
console.log("a * b : " , a*b)
console.log("a ** b : " , a**b)// eqauls to a^b ie: 45^5
console.log("a / b : " , a/b)
console.log("a % b : " , a % b)

//Assignment operators
 let newvar = 5;
// a= a+5 same as:
 newvar += 5
console.log(newvar)
// *=, -=, ==

//Comparison operator
let comp1 = 6;
let comp2 = 7;
let comp3 = "6"
console.log("comp1 == comp2: ", comp1== comp2 )
console.log("comp1 !== comp2: ", comp1 !== comp2 )
console.log("comp1 <= comp2: ", comp1 <= comp2 )

console.log("comp1 == comp3: ", comp1 == comp3) // true
console.log("comp1 === comp3: ", comp1 === comp3)// false,, value same ha lkn type alg ha
console.log("comp1 !== comp3: ", comp1 !== comp3)// true 
console.log("comp1 != comp3: ", comp1 != comp3)// false// type alg ha lkn value to same hana

//logical operators & , || , !
let x= 5;
let y = 6;

console.log(x<y && x==5)// 2nu condition true hogi to true hoga
console.log(x>y || x==5)// 1 condition true hogi to true hoga
console.log(!true)// will be false