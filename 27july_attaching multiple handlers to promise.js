//Attaching multiple handlers with Promises

let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Hey! I am not resolved")
        resolve(1)
    }, 2000);
})
//below are multiple handlers. All handlers are independent
p1.then(() => {
    console.log("Congratulations! this promise is now resolved")
    return new Promise((resolve, rejet) => {
        setTimeout(() => {
            resolve(4)
        }, 5000)
    })
}).then((value) => {
    console.log(value)
})
p1.then(() => {
    console.log("Hurry")
})