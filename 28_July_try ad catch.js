//Try and catch
setTimeout(() => {
    console.log("loading files....please wait")
}, 1000)
try {
    console.log(file)
}
catch (error) {
    console.log(error)
}

setTimeout(() => {
    console.log("fetching UserName and password....please wait")
}, 2000)

setTimeout(() => {
    console.log("Collecting Results....please wait")
}, 3000)
setTimeout(() => {
    console.log("Processing Done...!!")
}, 4000)


