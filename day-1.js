// 1 Remove duplicates from an array (without using Set).
// Input: [1,2,2,3,4,4,5]  
// Output: [1,2,3,4,5]

function removeDuplicate(arr){
    let p=0;
    for(let i=1;i<arr.length;i++){
        if(arr[p] !=arr[i]){
          let temp = arr[i]
          arr[i]=arr[p]
          arr[p+1] =temp
          p++
        }
    }
    arr.length = p+1
    return arr
}
// console.log(removeDuplicate([1,2,2,3,4,4,5]))

// 2 Reverse an array without using reverse().
// Input: [1,2,3,4]  
// Output: [4,3,2,1]

function reverseArray(arr){
    let p1=0;
    let p2 = arr.length-1

    while(p1<p2){
        let temp = arr[p2]
        arr[p2] = arr[p1]
        arr[p1] = temp

        p1++;
        p2--
    }
    return arr;
}
// console.log(reverseArray([1,2,3,4]))

// 3 Flatten a nested array.
// Input: [1,[2,[3,4]],5]  
// Output: [1,2,3,4,5]

// function flatArray(arr){
//     let newarr = []
//     for(let i=0;i<arr.length;i++){
//         if(!Array.isArray(arr[i])){
//             newarr.push(arr[i])
//         }else{
//             return newarr.push([...flatArray(arr[i])])
//         }
//     }
//     return newarr
// }
// console.log(flatArray([1,[2,[3,4]],5])) bug hai


// 4 Find the second largest element in an array.
// Input: [10, 5, 20, 8]  
// Output: 10

function findSecondLargest(arr){
    let first = -Infinity;
    let second = -Infinity

    for(let i=0;i<arr.length;i++){
     
        if(first<arr[i]){
            second = first;
            first = arr[i]
        }
        else if(arr[i]>second && first>arr[i]){
            second = arr[i]
        }
    }
    console.log(first,second)
}
// findSecondLargest([10, 5, 20,10, 8,8])

// 5 Rotate an array k times.
// Input: [1,2,3,4,5], k=2  
// Output: [4,5,1,2,3]

function rotateKTimes(arr, k){
   let rotadedArray =[]
   let nonRotedArray = arr.slice(0,arr.length-k)
   let rotedArray = arr.slice(arr.length-2)
  
    for(let i=0;i<nonRotedArray.length;i++){
        rotadedArray.push(nonRotedArray[i])
    }
    for(let i=rotedArray.length-1;i>=0;i--){
        rotadedArray.unshift(rotedArray[i])
    }
    console.log(rotadedArray)

}
rotateKTimes([1,2,3,4,5],2)