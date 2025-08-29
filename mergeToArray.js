// leet code question
// merget two array example
// num1 = [1,2,3] num2 =[2,5,6]
// output : num1 = [1,2,2,3,5,6]

// First approach

function mergetTowArray(arr1, arr2) {
  for (let i = 0; i < arr2.length; i++) {
    arr1.push(arr2[i]);
  }
  return arr1.sort();
}

// console.log(mergetTowArray([1,2,3],[2,5,6]))

function mergeTwoArray(arr1, m, arr2, n) {
  let copy = arr1.slice(0, m);
  let p1 = 0;
  let p2 = 0;

  for (let i = 0; i < m + n; i++) {

    if (p2 >= n || (copy[p1] <= arr2[p2] && p1 < m)) {
      arr1[i] = copy[p1];
      p1++;
    } else {
      arr1[i] = arr2[p2];
      p2++;
    }
  }
  return arr1;
}

console.log(mergeTwoArray([1, 2, 3] ,3, [2, 5, 6],3));