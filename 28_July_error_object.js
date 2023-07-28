//Error Object
// for all built in erros: there are two main properties:
//error.name , error.message

// try {
//     harry
// } catch (error) {
//     console.log(error.name)
//     console.log(error.message)
// }

// try {
//     throw new Error("I am custom Error")
// } catch (error) {
//     console.log(error.name)
//     console.log(error.message)
//     console.log(error.stack)

// }

try {
    let age = prompt("Entre your age: ")
    age = Number.parseInt(age)
    if (age > 120) {
        throw new Error("Age is invalid")//error object
    }
} catch (error) {
    console.log(error)
}

