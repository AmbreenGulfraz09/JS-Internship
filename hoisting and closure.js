//JS default behaviour to moving the declarationsof functions and varaibles to the top
// varaibles remains undefined until the line of initialization reached.
//hoisting applied for var, not for let and const
/*
console.log(a)//undefined
greet()
var greet = function () {
    console.log("Good morning")
}

var a = 9; // Declaration hoisted to the top but initialization is not
console.log(a)//output 9
*/

//CLOSURE SET
// combination of functions bundled together , where an inner function has access to outer function's varaibles
/*
function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() {
    // displayName() is the inner function, a closure
    console.log(name); // use variable declared in the parent function
  }
  name = "Harry"
  return displayName;
}
let c = init();
c()
*/
function returnFunc() {
    const x = () => {
        let a = 1
        console.log(a) //1
        const y = () => {
            // let a = 2
            console.log(a) //999
            const z = () => {
                // let a = 3
                console.log(a) //999
            }
            z()//3rd call
        }
        a = 999
        y()//2nd call
    }
    return x//1st call
}

let a = returnFunc()
a()

