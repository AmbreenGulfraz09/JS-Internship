//Searching in DOM

//change the card title by element class
//let ctitle = document.getElementsByClassName("card-title")[0]
//ctitle.style.color = "red"
//also written as: 
//document.getElementsByClassName("card-title")[0].style.color="red"

//get element by id
// let ctitle = document.getElementById("firstcardtitle")
// ctitle.style.color = "blue"


//All elements in class and can also be applied on elements
let Alltitles =document.querySelectorAll(".card-title")
Alltitles[0].style.color = "red"
Alltitles[1].style.color = "blue"
Alltitles[2].style.color = "brown"
console.log(Alltitles)

document.querySelector(".this").style.color = "white";
document.querySelector(".this").style.background = "red";

console.log(document.getElementsByTagName("a"))
console.log(document.querySelector(".card").getElementsByTagName("a"))