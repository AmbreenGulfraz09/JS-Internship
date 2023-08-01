// A regular expression is a sequence of characters that forms a search pattern.

// The search pattern can be used for text search and text replace operations.

//m for multiline matching
const regx = /very/g  //global match
const regx2 = /vERy/i  // case insensitive matching
const text = "JS is very very very nice"
console.log(text.replace(regx, "VERY"))
console.log(text.search(regx))
console.log(text.search(regx2))

//test()  //search for occurence provided expression and return true or false
const alphabet = /e/
console.log(alphabet.test("This is nice"))  //search for occurence of e

// exec().....It searches a string for a specified pattern, and returns the found text as an object.
console.log(/e/.exec("this is nice"))