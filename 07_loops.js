//For Loop
//program to add first n numbers, starting from 1
/*
let sum =0;
let n = prompt("Entre n number: ");
n = Number.parseInt(n);

for(let i=0;i<n;i++){
  sum += i+1;
}
console.log("sum of numbers till n: ",sum);

//For In loop
const marks= {
  ambreen : 25,
  sabeen : 23,
  hadiya: 14,
  Muneeb : 16,
  Nayyab : 24
}
for( let a in marks){
  console.log("Marks of "+ a+ " are "+ marks[a])
}

//For OF loop
for(let a of 'Ambreen'){
  console.log(a);
}

// while loop
let n = prompt("Entre any number: ")
n = Number.parseInt(n);
 let i =0;
while(i<n){
  console.log(i)
  i++
}

// Do-while loop
let n = prompt("Entre any number: ")
n = Number.parseInt(n);
 let i =0;
do{
  console.log(i)
  i++
}while(i<n)
*/
// sample program
let result =  ' ';
let k=0;
do{
  k = k+1;
 result = result + k;
} while(k<5)
console.log(result)
