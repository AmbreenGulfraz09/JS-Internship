//practice questions of loops and functions
//Q4
const mean=(a,b,c,d,e)=>{
    return (a+b+c+d+e)/5;
  }
  
  const obj={
    harry : 97,
    rohan : 78,
    akash : 73
  }
  //Q1
  for(let k=0;k<Object.keys(obj).length;k++){
    // console.log("the marks of " +Object.keys(obj)[k] + " are "+ obj[Object.keys(obj)[k]]);
  }
  
  
  //Q2
  for( let a in obj){
   // console.log("the marks of " +a+" are "+ obj[a])
  }
  
  //Q3
  let cn = 4;
  let i 
    while(i != cn){
   i= prompt("entre a nunber")
     console.log("Try Again")
    }
  console.log("Yeah, this is a correct number")
  
  
  console.log("mean of 5 numbers is : ", mean(1,2,3,4,5))