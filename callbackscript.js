//Asynchronus actions: actions that can take significant time to execute.i.e. call backs , promises
//synchronus actions: happening at the same time, executing program sequentially 

//Call Backs, this is asynchronus programming
//a function which is to be executed after another function has finished execution
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
        return
    }
   // alert("Hello!...Script Loaded")
}
loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js",hello)

