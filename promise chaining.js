//promise chaining: whwn 1 promise is fulfiled it's result will be given to next then() and 
// the value returned by that 1st then() is given to nxt then() and so on
// and in this way many then() are attached with 1 promise
//callBack hell problem is solved by PROMISE CHAINING
let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("p1 Resolved in 2 seconds")
        resolve(56)
    }, 2000)
})
p1.then((value) => {
    console.log(value)
    let p2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("p2 Resolved in 2 seconds")
            resolve("Promise 2")
        }, 2000)
    })
    return p2
}).then((value) => {
    console.log("we are done")
    return 2
}).then((value) => {
    console.log("Now we are 100% done")
})
//console.log(p1)