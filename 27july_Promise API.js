//API having many methods. but 6 are primary methods
//These are static methods of promise class
//promise.all
//promise.allSettled
//promise.any
//promise.race
//promise.resolve ... return resolved promise
//promise.reject ... return rejected promise

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 1")
    }, 1000)
})
let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 2")
        //reject(new Error("error"))
    }, 2000)
})
let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("value 3")
    }, 3000)
})

// p1.then((value) => {
//     console.log(value)
// })
// p2.then((value) => {
//     console.log(value)
// })
// p3.then((value) => {
//     console.log(value)
// })
//instead of printing all values individualy we do as: 
// let promise_all = Promise.all([p1, p2, p3])
// promise_all.then((value) => {
//     console.log(value)
// })
//its result will appear when all promises are resolved
//according to above example all three promises will be resolved in 3 seconds
//if error occured in one of them, promise_all will not execute

//if any error occured in one of them instead of using catches for all we will use :
let promise_all = Promise.allSettled([p1, p2, p3])
promise_all.then((value) => {
    console.log(value)
})

//3nu ma sy jo pehly ho jay usy dikha dy ga, srf 1st wali
promise_all = Promise.race([p1, p2, p3])
promise_all.then((value) => {
    console.log(value)
})
//3nu ma sy jo pehly resolve ho jay usy dikha dy ga, jin ma error ay ga wo error ko show ni kry ga us k agli jo b pehly resolve hui, show it
promise_all = Promise.any([p1, p2, p3])
promise_all.then((value) => {
    console.log(value)
})
