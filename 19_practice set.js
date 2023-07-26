//Q1
let a = prompt("Enter your age", "18");
a = Number.parseInt(a);

if (a > 0 && a < 18) {
  alert("You are a child. You can't drive.");
} else if (a >= 18 && a <= 100) {
  alert("You can drive.");
} else {
  console.error("Invalid age");
}


const message = 
  (a > 0 && a < 18) ? "You are a child. You can't drive." :
 (a >= 18 && a <= 100) ? "You can drive." :
  console.error("Invalid age");
alert(message);


//Q2
let qstn = confirm("Do you want to see the prompt again on this page? ")
if(qstn){
  document.write("Thanks")
}
else{
  document.write("No problem.Have a nice day")
}

