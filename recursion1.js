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

// binary serach
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (nums[middle] === target) {
      return middle;
    } else if (target > nums[middle]) {
      left = middle + 1;
    } else {
      right = right - 1;
    }
  }
  return -1;
};

// console.log(search([-1, 0, 5, 7, 9], -1));

// bubble sort

function bubbleSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// console.log(bubbleSort([1,3,9,5,6,8,7,4]))

// Insertion sort

function insertionSort(arr) {
  let n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr
}
console.log(insertionSort([7, 1, 5, 4, 3, 2]));
