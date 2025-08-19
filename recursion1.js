// basic example
function sum(n) {
  if (n == 0) return;
  console.log(n);
  n = n - 1;
  sum(n);
}
// sum(5)

// sum of array with help of recursion

function facto(n) {
  let total = 1;
  if (n == 1) return 1;

  return n * facto(n - 1);
}
// console.log(facto(5))

let arr = [1, 2, 3, 4, 9, 10];
function sum(n) {
  if (n == 0) return arr[n];
  return arr[n] + sum(n - 1);
}

// console.log(sum(arr.length-1))
