// Exercise no 1
let a = Math.floor(Math.random() * 100) + 1; // Generate a random integer between 1 and 100
let imp;
let score = 100;

while (imp != a) {
  score = score - 1;
  imp = prompt("Enter the number: ");
  if (imp == a) {
    console.log("Your Guess is correct");
    console.log(`You guessed the actual number in ${100 - score} chances`);
  } else if (imp > a && imp < 100) {
    console.log("Your Number is greater than the actual number");
  } else if (imp < a && imp > 0) {
    console.log("Your Number is smaller than the actual number");
  } else {
    console.log("Enter a Number between 1 - 100");
  }
}
console.log("Your score is : " , score)
