// practice of Strings
//Q1
console.log("Har\"".length)
//it will print 4

//Q2
const sentence = "You are nice"
const word= "nice";
console.log(sentence.includes(word))
console.log(sentence.includes(word)?  `${word} is include` : `${word} is not include`)

//Q2 continue
console.log(sentence.startsWith("You"))
//Q2 continue
console.log(sentence.endsWith("nice"))
//Q3
let testString = "LOWERCASES"
console.log(testString.toLowerCase())

//Q4
let str = "Please give RS 1000"
//let amount = str.slice(15), also writen as: 
let amount =Number.parseInt(str.slice("Please give RS ".length))
console.log(amount)

console.log(typeof amount)

//Q5
let girl = "Hadiya"
console.log(girl.replace("i","e"))