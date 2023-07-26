//Arrays
let marks=[93,43,56,72,"Not present", null, false]

console.log(marks)
console.log(marks[0])
console.log(marks[1])
console.log(marks[2])
console.log(marks[3])
marks[7] = 90//adding value
console.log(marks[7])

console.log("The lengh of marks: ",marks.length)
marks[1] = 81// changing value
console.log(marks)
console.log(typeof marks)

for(let i=0;i<marks.length;i++){
  console.log(marks[i])
}
