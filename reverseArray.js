// Write a function to reverse an array without using reverse().


function reverseArray(arr){
    let temp = [];
    for(let i=arr.length-1;i>=0;i--){
        temp.push(arr[i])
    }
    return temp
}

let ar = [1,2,3,4,5,6,7]

// console.log(reverseArray(ar))

function reverseArrayOtherWay(arr){
    let arrlength = arr.length
    for(let i=0;i<arrlength/2;i++){
        let temp = arr[arrlength-1]
        arr[arrlength-1]=arr[i]
        arr[i]=temp;
        arrlength--
    }
    return arr
}

// console.log(reverseArrayOtherWay(ar))

function reverseThirdWay(arr){
    let left = 0;
    let right = arr.length-1

    while(left<right){
        let temp = arr[right]
        arr[right]=arr[left]
        arr[left]=temp
        right--
        left++
    }
    return arr
}
// console.log(reverseThirdWay(ar));


// Q. Rotate array by k

// 👉 Example: [1,2,3,4,5,6] rotated by 2 → [5,6,1,2,3,4].

function rotateArray(arr, k){
    let arrlength = arr.length-k
    let temp = arr.slice(0, arrlength)
    
    for(let i=arr.length-1; i>=arrlength;i--){
       temp.unshift(arr[i])
    }

return temp


}

let newarr =[1,2,3,4,5,6]
// console.log(rotateArray(newarr,2))

