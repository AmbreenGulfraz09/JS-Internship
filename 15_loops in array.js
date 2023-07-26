// loops in arrays
let num = [3,5,2,4,6]

for(let i=0;i<num.length;i++){
  console.log(num[i])
}
console.log("")
//for each loop
num.forEach((element)=>{
  console.log(element * element)
})

//Array.from
let name = "harry"
let arr = Array.from(name)
console.log(arr)

//for off loop
for(let i of num){
  console.log(i)
}
//for in loop
for(let a in num){
  console.log("\n",a)
}