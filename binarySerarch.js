
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

