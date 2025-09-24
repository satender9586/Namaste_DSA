//1 String – Reverse a String
// Input: "frontend" → Output: "dnetnorF"

function reverseString(str) {
  let newstr = str.split("").reverse().join("");
  return newstr;
}
// console.log(reverseString("frontend"))

//2 Array – Find Maximum Number (without Math.max)
// Input: [10, 20, 5, 8, 100] → Output: 100

function max(arr) {
  let maxNum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    if (maxNum < arr[i]) {
      maxNum = arr[i];
    }
  }
  return maxNum;
}
// console.log(max([10, 20, 5, 8, 100] ))

//3 Object – Count Keys
// Input: { name: "Amit", age: 25, city: "Delhi" } → Output: 3
function countKeys(obj) {
  let count = Object.keys(obj).length;
  return count;
}

// console.log(countKeys({ name: "Amit", age: 25, city: "Delhi" }))

// 4Array + Logic – Find Pairs with Target Sum
// Input: [1,2,3,4,5], Target = 6
// Output: [ [1,5], [2,4] ]

function findPair(arr, target){
    let pair = []
    for(let i=0;i<arr.length;i++){
        for(let j=i+1; j<arr.length;j++){
            if(arr[i]+arr[j]===target){
                pair.push([arr[i],arr[j]])
            }
        }
    }
    return pair
}
// console.log(findPair([1,2,3,4,5],6))

// 5 String – First Non-Repeating Character
// Input: "swiss" → Output: "w"

function nonRepeated(str){
    const obj  = {}
    for(let i=0;i<str.length;i++){
        if(!obj[str[i]]){
            obj[str[i]] = 1
        }else{
            obj[str[i]] = obj[str[i]]+1
        }
    }
   const find = Object.keys(obj).find((item)=> obj[item]===1)
   return find
}
// console.log(nonRepeated("swiss"))

//6 String + Logic – Check Anagram
// Input: "listen", "silent" → Output: true
// Input: "hello", "world" → Output: false

function checkAnagram(str1,str2){
    if(str1.length != str2.length) return false
    const obj={}
    for(let i=0;i<str1.length;i++){
        if(!obj[str1[i]]){
            obj[str1[i]] = 1
        }else{
            obj[str1[i]]=obj[str1[i]]+1
        }
    }
    for(let j=0;j<str2.length;j++){
        if(!obj[str2[j]]){
            return false
        }else{
             obj[str2[j]]=obj[str2[j]]-1
        }
    }
   const isAnagram = Object.keys(obj).every((item)=>obj[item]==0)
   return isAnagram
}
console.log(checkAnagram("listen","silent"))