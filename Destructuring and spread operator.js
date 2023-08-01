//destructring is used to unpack values from an array or properties from objects into distinct variables

//destructuring
/*
let arr = [3, 5, 8, 9, 0, 4, 6, 7]
//let [a, b, ...rest] = arr
//console.log(a, b, rest)


let arr2 = [3, 5, 8, 9, 0, 4, 6, 7]
let [a, , , ...rest] = arr2 //rest value will starts from 9
console.log(a, rest)//output 3cand then 9 onwards


// let arr = [1, 2]
// let [a, b] = arr
// console.log(a, b)
*/

// spread operator
//it allows us to create object of an array
let array1 = [1, 2, 3, 4, 5]
let obj1 = { ...array1 }
console.log(obj1)

function sum(v1, v2, v3) {
    return v1 + v2 + v3
}
console.log(sum(...array1))//sum of first 3 elements of array1


let obj2 = {
    name: "ambreen",
    company: "ripple berry",
    position: "intern"
}
console.log({ ...obj2 })
console.log({ ...obj2, name: "muneeba", company: "ABC" }) // valuess become changed

/*
//scope
let a=8;
{
    console.log(a)//it is block level scope
    let b=7// can not be accessed outside the scope
}
console.log(b)// it is out of scope


function f()
{
    let c=20
    console.log(c)
}
f()
*/
