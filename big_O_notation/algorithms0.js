function print4times(n){
  for(let i=0;i<4;i++){         // { O(4)} O=> opration
       console.log("whats up");
   }
}
print4times(1000);



function printNtimes(n){
   for(let i=0;i<n;i++){         // { O(n)} O=> opration
        console.log("whats up");
    }
}
printNtimes(10);




 function print2Ntimes(n){
     for(let j=0;j<n;j++){             //      1)      { O(2*n) }
         console.log("whats up");
       }
       for(let j=0;j<n;j++){
        console.log("whats up");
      }
   }
print2Ntimes(10);



 function nToPower2(arr) {
   for(let i=0;i<arr.length;i++){         //    2)      { O(n^2) }
     for(let j=0;j<arr.length;j++){
       console.log(arr[i]+" "+arr[j]);
     }
  }
 }
 nToPower2(["orange", "mango", "banana"]);


// let arr1=["rohit","mohit"];
// console.log(arr1);

function shoutWhatsUpDawg(arr,arr4) {
  for(let i=0;i<arr.length;i++) {          //       3)     { O(n*m) }
    for(let j=0; j<arr4.length; j++) {
      console.log(arr[i]+ " " +arr[j]);
    }
 }
}
shoutWhatsUpDawg(["orange", "mango", "banana"],["oil","honny"]);



// function function2(x,y) {
//   for(let i=0;i<x.length;i++) {          //      
//     for(let j=0; j<y.length; j++) {
//       console.log(x(i)+" "+y(i));
//     }
//  }
// }
// function2();




/*
          Identfying Runtmie Complexity(Rules of Thumb)
          1) Iterating over collection OR using N as a pointer with a for loop =  O(n)
          2) Iterating over the same collection with nested for loops  =  O(n^2)
          3) Iterating over the different collection with nested for loops  =O(n*m)     
*/

const sumUpTo=n=>{
  let total=0;
  for(let i=0;i<=n;i++){    // if n=2 total=1+2=3; n=3 total=1+2+3=6 this type of function
    total += i;
  }
  return total;
 }


 const sumupTo=n=>{
   return(n*(n+1))/2;         //if n=3 3*4/2= 6
 }

//n*(n+1))/2 function is better than sumUpTo



function factorial(n){
  let answer = 1;
  if (n == 0 || n == 1){
    return answer;
  }else{
    for(var i = n; i >= 1; i--){
      answer = answer * i;
    }
    return answer;                  //  n!
  }  
}