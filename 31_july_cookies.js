//Cookies are small strings of data stored in browser
//small pieces of text send to your broswer by website you visisted
//they help that website to remember information about your visit

//console.log(document.cookie)
document.cookie = "name=Ambreen009"//keeps on adding cookies
//set call
//let key = prompt("Entre key: ")
l//et value = prompt("Entre name: ")
// document.cookie = `${key} = ${value}`
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}` //set call

document.cookie = "1=2:3=4"//this is 1 cookie , 3=4 and if something new added are only the options which can be path and expire date and time
console.log(document.cookie)

