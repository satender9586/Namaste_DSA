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




