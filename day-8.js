// Q1. Deep clone an object

function deepClone(){
    const obj = {a:1, b:{c:2}};
    const newObj = JSON.parse(JSON.stringify(obj))
    newObj.a=5
    newObj.b.c=5
    console.log(obj)
    console.log(newObj)

}
// deepClone()

// Q2. Merge two objects
function Merge(obj1, obj2){
    const newObj = {...obj1, ...obj2}
    console.log(newObj)
   
}

Merge({a:1, b:2},{b:3, c:4})

// Q3. Convert array of objects into grouped object


function convertToGroup(arr){
    const obj = {}
  
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i].age]){
            obj[arr[i].age]=[]
        }
        obj[arr[i].age].push(arr[i])

    }
    console.log(obj)
}


// people = [
//   {name:"Alice", age:25},
//   {name:"Bob", age:20},
//   {name:"Charlie", age:25}
// ]
// convertToGroup(people)
