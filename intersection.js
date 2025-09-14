// Intersection

// Find intersection of [1,2,3,4] and [3,4,5,6].
// Output: [3,4].

function intersection(arr1, arr2){
    let temp = []
    for(let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i])){
            temp.push(arr1[i])
        }
    }
return temp
}

let arr1 = [1,2,3,4] 
let arr2 = [3,4,5,6]

console.log(intersection(arr1, arr2))