//used very less often then local storage
//same as local storage but only defference is session storage only exist in cureent browser, not in 2nd tab or 3rd tab 

sessionStorage.setItem("1", "1stItem")
//it only exists in sxisting tab, if u open new tab it will disappear
//ALMOST SAME METHODS AS LOCAL STORAGE
console.log(sessionStorage.getItem("1"))

//Storage event
// it triggers when you update localStorage or sessionStorage

window.onstorage = (e) => {
    alert("changed")
    console.log(e)
}