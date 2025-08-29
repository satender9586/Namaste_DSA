// Reverse an array without using .reverse().

function reverString(param) {
  const temp = param.split("");
  let rev = "";
  for (let i = temp.length - 1; i >= 0; i--) {
    rev += temp[i];
  }

  console.log(rev);
}

// let str = "satender"; // out : "mar"
// reverString(str)

function checkStringPalim(str) {
  const rev = str.toLowerCase().split("").reverse().join("");
  if (rev === str) {
    return true;
  } else {
    return false;
  }
}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

// console.log(checkStringPalim(str3))

// Remove duplicates from an array.

function removeDuplicate(arr) {
  const obj = {};
  for (let i = 0; i < arr.length; i++) {
    if (!obj[arr[i]]) {
      obj[arr[i]] = true;
    }
  }
  return Object.keys(obj);
}

// console.log(removeDuplicate([1,2,3,3,6,1]))

function flatArray(arr) {
  return arr.flat();
}

// console.log(flatArray([1,2,[3]]))

// Find the second largest number in an array.

function findSecondLarget(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > first) {
      first = arr[i];
    } else if (arr[i] > second) {
      second = arr[i];
    }
  }
  return second;
}

// console.log(findSecondLarget([1,16,3,4,5,15]))

// Find the first non-repeated character in a string.
// Input: "aabbccdde"
// Output: "e"

function findNoNRepeated(s) {
  const obj = {};

  for (let char of s) {
    if (!obj[char]) {
      obj[char] = 1;
    } else {
      obj[char] = obj[char] + 1;
    }
  }

  for (let key in obj) {
    if (obj[key] === 1) {
      return key;
    }
  }
}

// console.log(findNoNRepeated("swiss"))

// Count the number of vowels in a string.

function CountVowels(str) {
  let count = 0;
  let vovels = ["a", "e", "i", "o", "u"];

  for (let i = 0; i < str.length; i++) {
    if (vovels.includes(str[i])) {
      count = count + 1;
    }
  }
  return count;
}
// console.log(CountVowels("aeiou"))

// Check if two strings are anagrams of each other

// Input: "listen", "silent"
// Output: true

function findAnagram(str1, str2) {
  const obj = {};
  for (let i = 0; i < str1.length; i++) {
    if (!obj[str1[i]]) {
      obj[str1[i]] = 1;
    } else {
      obj[str1[i]] = obj[str1[i]] + 1;
    }
  }

  for (let j = 0; j < str2.length; j++) {
    if (obj[str2[j]]) {
      obj[str2[j]] = obj[str2[j]] - 1;
    }
  }

  return Object.values(obj).every((val) => val === 0);
}
// console.log(findAnagram("listen", "silens"));

// Write a function to count the frequency of each character in a string and return it as an object.s

function frequencyObj(str) {
  const obj = {};
  for (let val of str) {
    if (!obj[val]) {
      obj[val] = 1;
    } else {
      obj[val] = obj[val] + 1;
    }
  }
  return obj;
}

// console.log(frequencyObj("hello"))

// Given an object, invert its keys and values.

// {a:1, b:2, c:3} // → {1:"a", 2:"b", 3:"c"}

function invert(obj) {
  const newObj = {};
  for (let char in obj) {
    if (!newObj[obj[char]]) {
      newObj[obj[char]] = char;
    }
  }
  console.log(newObj);
}

// Rotate an array k times to the right.
// 👉 Example: [1,2,3,4,5], k=2 → [4,5,1,2,3]

function rotate(arr, k) {
  const lengthofnotrotate = arr.length - k;
  const ar = arr.slice(lengthofnotrotate);
  const ans = [...ar].concat(arr.slice(0, lengthofnotrotate));
  console.log(ans);
}
// rotate([1,2,3,4,5],3)

// Find the intersection of two arrays (common elements).
// Input: arr1 = [1,2,3,4], arr2 = [3,4,5,6]

// Output: [3,4]

function findCommon(arr1, arr2) {
  const newarr = [];
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] == arr2[j]) {
        newarr.push(arr1[i]);
      }
    }
  }
  return newarr;
}
// console.log(findCommon([10,20,30], [30,40,50]));

// Create a function counter() that uses closures to return increment and decrement functions. example

function counter() {
  let count = 0;

  function icrement() {
    count++;
    return count;
  }
  function decrement() {
    count--;
    return count;
  }

  return { icrement, decrement };
}

// const myCount = counter()
// console.log(myCount.icrement())
// console.log(myCount.icrement())
// console.log(myCount.icrement())
// console.log(myCount.icrement())
// console.log(myCount.icrement())
// console.log(myCount.icrement())

// Two Sum (classic)

// nums = [2, 7, 11, 15], target = 9
// Output: [0,1]  // Because nums[0] + nums[1] = 2 + 7 = 9

function findSum(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
}
// console.log(findSum([2, 7, 11, 15],9))

// Remove Duplicates from Array
function removeDupliWithSet(arr) {
  const map = new Set(arr);
  console.log(map);
}
// removeDupliWithSet([1,2,2,3,4,4,5])

function removeDupliWithTwoPointer(arr) {
  if (arr.length === 0) return [];
  let p = 0;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] != arr[p]) {
      p++;
      arr[p] = arr[i];
    }
  }
  return arr.slice(0,p+1)
}
// console.log(removeDupliWithTwoPointer([1, 2, 2, 3, 4, 4, 5]))

// Reverse an Array (in-place)
function reverArrayWithMethod(arr){
return arr.reverse()
}

// console.log(reverArrayWithMethod([12,2,3,4]))

function reverseArrayWithPointer(arr){
  let left = 0;
  let right = arr.length-1;

  for(let i=0;i<arr.length/2;i++){
    let temp = arr[left];
    arr[left] = arr[right];
    arr[right] = temp;
    left++;
    right--
  } 
  console.log(arr)
}
reverseArrayWithPointer([10,12,13,14,15,16,18])
