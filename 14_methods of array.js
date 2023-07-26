//some methods of array

let num = [1,2,3,34,4]
let num2 = [11,22,33,38,44]
/*
let b= num.toString()//it is now a String

console.log(b)
let c= num.join("_")
console.log(c)
console.log(typeof c)

num.pop()// last element removed
console.log(num)
num.push(56)//add new element and return new array length
console.log(num)

let r= num.shift()//remove elemnt from start
console.log(r)
console.log(num)


r= num.unshift(78)//add element into start
console.log(r)
console.log(num)
*/
//some more methods
delete num[0]// delete element  but not effect the length of array
console.log(num)
console.log(num.length)

let newArray = num.concat(num2)
console.log(newArray)

let num3 = [33,77,11,44,88,22]
  num3.sort()
console.log(num3)

//splice
//add new items into array, need 4 parameters 
//where to add
// how many to remove 
// which you wanna add
let num4 = [55,22,3,4,5,6,7,229]
num4.splice(2,3,10,20,30)
console.log(num4)