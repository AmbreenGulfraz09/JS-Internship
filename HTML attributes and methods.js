//Attribute methods

// let first = document.getElementById("first")
// let a = first.getAttribute("class")//first is id of div
// console.log(a)// attribute ha pehly sy bs usy get krna ha

// console.log(first.hasAttribute("class"))// kya yh wala attribute element py exist krta aha ya nhi
// console.log(first.hasAttribute("style"))

//first.setAttribute("hidden", "true")// hm hud attribute set kiyaa
//first.setAttribute("class","true div1")

//remove attribute
//first.removeAttribute("class")

//return all attributes
//console.log(first.attributes)

// we can make custom attributes by(data-any attribute of your own choice)
// console.log(first.dataset)
// console.log(first.dataset.game)//returns GTA
// console.log(first.dataset.player)//returns ambreen
//dataset returns any customized attributes used with element

//******* INSERTION IN HTML  ********
//let a = document.getElementsByTagName("div")[0]
//a.innerHTML = a.innerHTML + "<h1>Hello World</h1>";//this is classical method

//new method of insertion
//let div = document.createElement('div')
//div.innerHTML = '<h1>Hello World</h1>'
//addEventListener
//a.appendChild(div)//insert at the end of container
//a.prepend(div)//insert at start of container
//more methods
//a.before(div)// insert in start but out of container
//a.after(div)// insert in end but out of container
//a.replaceWith(div)

// ***** INSERT adjacent HTML, element , text ****
//let first = document.getElementById("first")
// first.insertAdjacentHTML('beforebegin', '<div class= "test"> beforebegin</div>')
// first.insertAdjacentHTML('beforeend', '<div class= "test"> beforeEnd</div>')
// first.insertAdjacentHTML('afterbegin', '<div class= "test"> afterbegin</div>')
// first.insertAdjacentHTML('afterend', '<div class= "test"> afterEnd</div>')

//first.remove();//page khali ho jay ga

// *****  Changing HTML Classes: ClassName , classList*****
let first = document.getElementById("first")
first.className = "text-black red"//class change ho jay gi
first.classList.remove("red")//class removed
first.classList.add("yellow")

// agr class ha to hta dy ga, nhi ha to lga dy ga
first.classList.toggle("red")
first.classList.contains("red")//class ha ya nhi
