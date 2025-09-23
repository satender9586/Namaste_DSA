// // basic example
// function sum(n) {
//   if (n == 0) return;
//   console.log(n);
//   n = n - 1;
//   sum(n);
// }
// // sum(5)

// // sum of array with help of recursion

// function facto(n) {
//   let total = 1;
//   if (n == 1) return 1;

//   return n * facto(n - 1);
// }
// // console.log(facto(5))

// let arr = [1, 2, 3, 4, 9, 10];
// function sum(n) {
//   if (n == 0) return arr[n];
//   return arr[n] + sum(n - 1);
// }

// // console.log(sum(arr.length-1))



function counter(n){
  if(n===0) return 
  console.log(n)
  counter(n-1)
}
// console.log(counter(10))


function sumOfNumber(n){
  if(n===0) return n;
  return n+sumOfNumber(n-1)
}
// console.log(sumOfNumber(6))

function fabonacciSeriries(n){
  if(n==1 || n==0) return n;
  return n = fabonacciSeriries(n-1)+fabonacciSeriries(n-2)
}
// console.log(fabonacciSeriries(10))


