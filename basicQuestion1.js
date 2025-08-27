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
