// Q1. Flatten a nested array [1, [2, [3, [4]]]] → [1, 2, 3, 4]

function flattenArrayFirst(arr){
    let newarr = arr.flat(Infinity)
    return newarr
}
// console.log(flattenArrayFirst([1, [2, [3, [4]]]]))

function flattenArrayTwo(arr){
    let newarr = []
    for(let i=0;i<arr.length;i++){
        if(!Array.isArray(arr[i])){
            newarr.push(arr[i])
        }else{
            newarr.push(...flattenArrayTwo(arr[i]))
        }
    }
    return newarr
}
// console.log(flattenArrayFirst([1, [2, [3, [4]]]]))

// Q2. Intersection of two arrays arr1 = [1, 2, 3, 4], arr2 = [3, 4, 5, 6]  
// → [3, 4]

function intersection(arr1,arr2){
    let arr = []
    for(let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i])){
            arr.push(arr1[i])
        }
    }
    return arr
}
// console.log(intersection([1, 2, 3, 4], [3, 4, 5, 6] ))

// Q4. Find frequency of elements ["a", "b", "a", "c", "a", "b"]  
// → { a: 3, b: 2, c: 1 }

function findFrequency(arr){
    const obj = {}
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]]=1
        }else{
            obj[arr[i]]=obj[arr[i]]+1
        }
    }
    return obj
}
// console.log(findFrequency(["a", "b", "a", "c", "a", "b"]  ))

// Q5. Group array of objects by property
// people = [
//   {name: "Alice", age: 25},
//   {name: "Bob", age: 20},
//   {name: "Charlie", age: 25}
// ]
// {
//   20: [{name:"Bob", age:20}],
//   25: [{name:"Alice", age:25}, {name:"Charlie", age:25}]
// }

function groupByage(arr){
    const obj = {};
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i].age]){
            obj[arr[i].age]=[]
        }
            obj[arr[i].age].push(arr[i])  
    }
    console.log(obj)
}
people = [
  {name: "Alice", age: 25},
  {name: "Bob", age: 20},
  {name: "Charlie", age: 25}
]
groupByage(people)