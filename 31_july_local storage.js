//it is a property which allows JS sites and apps to save key-value pairs in a web browser with no expiration date
localStorage.setItem("1", "firstItem")

let key = "2";
let value = "2ndItem"
localStorage.setItem(key, value)
localStorage.setItem("3", "3rdItem")
console.log(localStorage.getItem(key))

//localStorage.removeItem("3")//by key

//localStorage.clear()//clear all values in local storage

console.log(localStorage.length)
//getting keys
localStorage.key(0)
localStorage.key(1)
localStorage.key(2)