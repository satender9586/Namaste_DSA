// Reverse an array without using .reverse().


function reverString(param){
    const temp = param.split("");
    let rev = ""
    for(let i=temp.length-1; i>=0;i--){
            rev +=temp[i]
    }

    console.log(rev)
}


// let str = "satender"; // out : "mar"
// reverString(str)


function checkStringPalim(str){
    const rev = str.toLowerCase().split("").reverse().join("")
    if(rev===str){
        return true
    }else{
        return false
    }
}

let str1 = "racecar";
let str2 = "nitin";
let str3 = "Rama";

// console.log(checkStringPalim(str3))

// Remove duplicates from an array.

function removeDuplicate(arr){
    const obj = {};
    for(let i=0;i<arr.length;i++){
       if(!obj[arr[i]]){
             obj[arr[i]] = true
       }
    }
    return Object.keys(obj)
}

// console.log(removeDuplicate([1,2,3,3,6,1]))

function flatArray(arr){
    return arr.flat()
}

// console.log(flatArray([1,2,[3]]))

// Find the second largest number in an array.

function findSecondLarget(arr){
    let first = -Infinity;
    let second = -Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i]>first){
            first = arr[i]
        }else if(arr[i]>second){
            second = arr[i]
        }
        
    }
    return second
}

console.log(findSecondLarget([1,16,3,4,5,15]))