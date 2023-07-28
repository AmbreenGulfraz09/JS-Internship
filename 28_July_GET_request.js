//JS can be use to send and retrive information from network when needed
//AJAX : Asynchronous java script and XML

//fetch API used to get data, fetch without options is GET Request 
//jb b hm fetch krty hai hmai us sy 1 promise return hota ha
let p = fetch("https://goweather.herokuapp.com/weather/Rawalpindi")

p.then((response) => {
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    return response.json()
}).then((value2) => {
    console.log(value2)
})