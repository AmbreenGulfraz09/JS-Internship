//Callback hell or Pyramid of DOM
//callbacks inside callback
//code is growing horizontally and that is not good fo code readability
function loadScript(src, callback){
    var script = document.createElement("script")
     script.src = src;
     script.onload= function(){
     console.log("script loaded: " + src)
     callback(null);
     }
    //*** Error handling  */
    script.onerror= function(){
    console.log("Error loading the script") 
    callback(new Error("Src got some error"))
 }
    document.body.appendChild(script);
}
function hello(error){  // call back function
    if(error){
        console.log(error)
        sendEmergencyMessageToCeo();//
        return
    }
    alert("Hello!...Script Loaded")
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",hello)
