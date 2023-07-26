//String methods
let name = "Ambreen"
/*
console.log(name.length) // property
console.log(name.toUpperCase()) // method or function
console.log(name.toLowerCase()) 
console.log(name.slice(2,5))
console.log(name.replace("Ambr" , "Sab"))
*/
let friend = "Sabeen"
console.log( name.concat(" is a friend of ", friend))

let friend2 = "      ayesha   "
console.log(friend2.trim())// remove white spaces 
//use for loop to print a string

for(let i=0;i<friend.length;i++){
  console.log(friend[i])
}

const obj={
  name : "Ambreen",
  age: 21,
}
console.log(obj.hasOwnProperty("age"))
let one = "ambreen"
let two = "sabeen"
console.log(one.concat(" is sister of ",two))