//Map,Reduce and filters are higher order methods in Array

let arr= [45,23,21]
arr.map((value)=>{
 // console.log(value)
  return value+1;
})
// can aslo written as: 
let a= arr.map((value, index, array)=>{
  //console.log(value, index , array)
  //return value + index
})
//console.log(a)

//Array filter method
let arr2 = [45,23,21,0,3,5]
 let a2 = arr2.filter((a)=>{
   return a<10
})
//console.log(a2,arr2)

//Reduce Method
let arr3 = [1,2,3,5,2,1]
let a3 = arr3.reduce((a,b)=>{
  return a + b
})
console.log(a3)

