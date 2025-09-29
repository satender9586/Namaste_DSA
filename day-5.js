//1)  Linear Search arr = [10, 20, 30, 40], target = 30 → output: 2

function findPositon(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == target) {
      return i;
    } else {
      return -1;
    }
  }
}
// console.log(findPositon([10, 20, 30, 40],30))

// 2 Binary Search (for a sorted array) arr = [1,3,5,7,9], target = 5 → output: 2

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);

    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] <= target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
}
// console.log(binarySearch([1,3,5,7,9],3))

//3 Find the index of the second largest number arr = [10, 20, 30, 40] → second largest = 30 → output: 2

function findSecondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      second = first;
      first = i;
    } else if (arr[i] < second && arr[i] > first) {
      second = i;
    }
  }
  return second;
}
// console.log(findSecondLargest([10, 20, 30, 40,45]))

// 4. Sort arr = [5, 2, 9, 1] → [1, 2, 5, 9]

function sortArry(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
      }
    }
  }
  return arr;
}
// console.log(sortArry([5, 2, 9, 1]))

// 5 bubble sort arr = [5, 2, 9, 1] → [1, 2, 5, 9]

// function bubbleSort(arr) {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = 0; j < arr.length - 1 - i; j++) {
//         if(arr[i]>arr[j+1]){
//             let temp = arr[j+1]
//             arr[j+1]=arr[i]
//             arr[i]=temp
//         }
//     }
//   }
//   return arr
// }
// console.log(bubbleSort([5, 2, 9, 1,3,4,6,10]));
