//Make promise easier
// Async is function that return promise
//await wait for the promise to resolve

//hm kisi b function ko Async bna skty hai or phr us ma ksi b promise ko awite kr skty hai
async function func1() {

    let RwpWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("27 degree")
        }, 2000)
    })
    let ISBWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("23 degree")
        }, 3000)
    })
    // RwpWeather.then(alert)
    // ISBWeather.then(alert)
    console.log("Fetching Rwp weather,Please wait...")
    let rwpW = await RwpWeather// pehly is k resolve homy a wait kry ga
    console.log("Fetching Isb weather,Please wait...")
    let isbW = await ISBWeather// phr is k resolve homy a wait kry ga or us k bd ikatha result show ho ga
    return [rwpW, isbW]
}

console.log("Welcome to weather control room")
let result = func1()
result.then((value) => {
    console.log(value)
})


