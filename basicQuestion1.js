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
// reverseArrayWithPointer([10,12,13,14,15,16,18])

// Move Zeroes to End

// 👉 Input: [0,1,0,3,12] → Output: [1,3,12,0,0]

function MoveZeroes(arr){
    let p=0;
    console.log(p)
    for(let i=0; i<arr.length; i++){
      if(arr[i]==0){
        arr[i]=arr[i+1]
        p++
      }
    } 
    arr.splice(1,p)

    for(let i=0;i<p;i++){
      arr.push(0)
    }
    return arr
}

// Deep Clone an Object

function DeepClone(){
  const obj = {name:"amit",age:20, hobbies:{game:"cricket",study:"anime"}}
  // const newObj = {...obj}
  // const newObj = Object.assign(obj)
  const newObj = JSON.parse(JSON.stringify(obj))
  newObj.gender = "Male"
  newObj.hobbies.team = "India"
  console.log(obj)
  console.log(newObj)

}
// DeepClone()

// check . Palindrome String with reverse method

function CheckPalindrome(str){
  if(str.length===0) return false
  let updateStr = str.toLowerCase().replace(" ","");
  let newStr = "";
  for(let i=updateStr.length-1;i>=0;i--){
    newStr +=updateStr[i]
  }
 
  if(updateStr===newStr){
    return true
  }else{
    return false
  }

}
// console.log(CheckPalindrome("amma"))


// Find the first character that  repeate 

function FirstRepeatedChar(str){
  const obj = {};
  for(let i=0;i<str.length;i++){
    if(!obj[str[i]]){
      obj[str[i]]=1
    }else{
      obj[str[i]]=obj[str[i]]+1
      return str[i]
    }
  }
}
// console.log(FirstRepeatedChar("swwiss"))

// Find the first character that  does not repeat in a string.
function FirstNonRepeatedChar(str){
  const obj = {};

  for(let i=0;i<str.length;i++){
    if(!obj[str[i]]){
        obj[str[i]] = 1
    }else{
      obj[str[i]] = obj[str[i]]+1
    }
  }
  const first = Object.keys(obj).find(key => obj[key] === 1) || -1;
  return first

}
// console.log(FirstNonRepeatedChar("redivider"))

// . Longest Word in a Sentence
// Input: "I am preparing for frontend interviews"

// Output: "interviews"

function FindLondWord(str){
  const newStr = str.split(" ");
  let long = newStr[0]
  for(let i=0;i<newStr.length;i++){
    if(newStr[i].length>long.length){
      long = newStr[i]
    }
  }
  return long;
}
// console.log(FindLondWord("I am preparing for frontend interviews"))

// Find Missing Number

// 👉 Given an array containing n distinct numbers taken from 0,1,2,…,n, find the missing number.
// Input: [9,6,4,2,3,5,7,0,1] → Output: 8

function FindMissing(arr){
  let n= arr.length;
  let total = (n * (n+1)/2)
  let totalofArray = 0
  for(let i=0;i<arr.length;i++){
    totalofArray = totalofArray + arr[i]
  }
  return total - totalofArray
}
// console.log(FindMissing([9,6,4,2,3,5,7,0,1]))

// Recursion – Factorial of a Number

// 👉 Write a recursive function to calculate factorial.

// Input: 5 → Output: 120

// Object – Group By Property

// 👉 Write a function to group an array of objects by a proper

function GroupByProperty(arr){
  const obj = {}

  for(let value of arr){
    if(!obj[value.role]){
        obj[value.role] = []
    }
    if(obj[value.role]){
      obj[value.role].push(value)
    }
  }
return obj
}
const data = [
  { name: "Alice", role: "dev" },
  { name: "Bob", role: "manager" },
  { name: "Charlie", role: "dev" }
];
console.log(GroupByProperty(data))