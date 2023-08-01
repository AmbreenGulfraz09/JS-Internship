// IIFE: Imediatly invoked Function Expression
//It is defined as Self executing anonymous function

let a = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(456)
        }, 3000)
    })
}

(async () => {
    let b = await a();
    console.log(b)
    let c = await a();
    console.log(c)
    let d = await a();
    console.log(d)
})()  //IIFE  //initailized and call at the same time
//avoid polluting the global varaibles
