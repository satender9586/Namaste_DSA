// Q4. Flatten array

// 👉 Convert [1, [2, [3, [4]]]] → [1,2,3,4] without using .flat(Infinity).


function flatArray(arr){
    let newarray = [];
    for(let i=0;i<arr.length;i++){
        if(!Array.isArray(arr[i])){
            newarray.push(arr[i])
        }else{
            newarray.push(...flatArray(arr[i]))
        }
    }
    return newarray
}

let arr =[1, [2, [3, [4]]]]
console.log(flatArray(arr))
