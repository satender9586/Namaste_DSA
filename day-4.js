// 1 find unique [4,5,6,3,3,2,1,5]

function findUnique(arr){
    let unique = []
    for(let i=0;i<arr.length;i++){
        if(!unique.includes(arr[i])){
            unique.push(arr[i])
        }
    }
    return unique
}

// console.log(findUnique([4,5,6,3,3,2,1,5]))

//2 find all sub array

function findSubArray(arr) {
    let sub = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i; j < arr.length; j++) {
            sub.push(arr.slice(i, j + 1)); 
        }
    }
    return sub;
}

// console.log(findSubArray([4, 5, 6, 3, 3, 2, 1, 5]));

function sum(n) {
  let total = 0;
  for (let i = 0; i < n; i++) {
    total += i;
  }
  return total;
}

function memoize(callback) {
  let cache = {};
  return function (...args) {
    let n = args[0];
    if (n in cache) {
      return cache[n];
    } else {
      let result = callback(n);
      cache[n] = result;
      return result;
    }
  };
}

const eff = memoize(sum);
console.log(eff(10));



