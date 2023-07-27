// promise: execution of asynchrous actions
//All the promises runs in parallel, if there are 50 promises they will run parallelly

//resolve means fulfilled 
//reject means not completed
let p1 = new Promise(function (resolve, reject) {//syntax
    //jo chz is k andr ay gi wo background ma execute ho jay gi or phr apko notify kr diya jay ga
    console.log("promise is pending")
    setTimeout(() => {
        console.log("I am promise and i am fulfilled")
        resolve(true)    //after this promise is fulfilled
        //can be fulfilled by boolean, string or int , anything
    }, 3000)
})
let p2 = new Promise(function (resolve, reject) {//syntax
    //jo chz is k andr ay gi wo background ma execute ho jay gi or phr apko notify kr diya jay ga
    console.log("promise is pending")
    setTimeout(() => {
        //console.log("I am promise and i am Rejected")
        reject(new Error("I am error")) //to throw an error  
    }, 3000)
})
//console.log(p1,p2)
//if we are interested only in successfull completion, we use then()

p1.then((value) => {
    console.log(value)
}, (error) => {           // also written as this. then and catch at 1 place
    console.log("some error is occured in p1")
})


//if we are interested only in handling errors, we use error() funtion 
p2.catch((error) => {   //catching error from p2
    console.log("some error is occured in p2")
})


// p2.then((value)=>{
//     console.log(value)
// })