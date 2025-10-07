// Q1. Implement your own Array.prototype.map

Array.prototype.myMap = function(cb){
    let arr = []
    for(let i=0;i<this.length;i++){
        arr.push(cb(this[i]))
    }
    return arr
}

const arr = [1, 2, 3];
const result = arr.myMap((num) => num * 2); 
// console.log(result)

//⚙️ Q2. Convert array → object using index as key
// ["a", "b", "c"] → {0:"a", 1:"b", 2:"c"}

const arrayToOjb = (arr)=>{
    const obj = {}
    for(let i=0;i<arr.length;i++){
        obj[i] = arr[i]
    }
    return obj
}
// console.log(arrayToOjb(["a","b","c"]))

// 🧮 Q4. Count how many times each letter appears in a string
// "frontend" → { f:1, r:1, o:1, n:2, t:1, e:1, d:1 }

function countWord(word){
    const obj = {};
    for(let char of word){
        if(!obj[char]){
            obj[char]=0
        }
         obj[char]= obj[char]+1
    }
    console.log(obj)
}

