// 1 String – Longest Word
// Input: "I am preparing for frontend developer interview"
// → Output: "interview"

function findLargestWord(str){
    let convertInArray  = str.split(" ")
    let find = "";
    for(let i=0;i<convertInArray.length;i++){
        if(find.length<=convertInArray[i].length){
            find=convertInArray[i]
        }
    }
    return find

}
// console.log(findLargestWord("I am preparing for frontend developer interview"))

// 2 Array – Subarray With Given Sum
// Input: [1,2,3,7,5], Sum = 12
// Output: Subarray = [2,3,7]

function subArray(arr, target){
    for(let i=0;i<arr.length;i++){
        let sum=0;
        for(let j=i;j<arr.length;j++){
            sum = sum+arr[j]
            if(sum===target){
                return arr.slice(i, j+1)
            }
        }
    }
    return []
}
// console.log(subArray([1,2,3,7,5],12))


// 3 Array – Find Intersection
// Input: [1,2,3,4] and [3,4,5,6]
// Output: [3,4]

function findInterSection(arr1, arr2){
    let inter = []
    for(let i=0;i<arr1.length;i++){
        if(arr2.includes(arr1[i])){
            inter.push(arr1[i])
        }
    }
    return inter;
}
console.log(findInterSection([1,2,3,4],[3,4,5,6]))