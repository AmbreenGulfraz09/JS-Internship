//Practice set on Arrays
//Q1
/*
let arr=[1,2,3,4,5,6,7]
let a = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)
console.log(arr)

//Q2

let arr=[1,2,3,4,5,6,7]
let a;
do{
 a = prompt("Enter a number")
a = Number.parseInt(a)
arr.push(a)
}while(a!=0)
console.log(arr) 


//Q3
let arr = [2,3,4,5,6,7,8]
let arrNew = arr.filter((a)=>{
  return (a%2==0)//divisble by 2
})
console.log(arrNew)


// Q4
let arr= [2,3,4,5]

let newArr = arr.map((a)=>{
  return a*a
})
console.log(newArr)
*/

// Q5
let arr= [1,2,3,4,5]
let n = arr.reduce((n,n2)=>{
  return n*n2
})
console.log(n)