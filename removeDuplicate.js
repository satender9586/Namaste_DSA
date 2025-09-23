// [0,0,1,1,1,2,2,3,3,4]
// remove duplicate in existing array without use of any high orider method

function removeDuplidate(arr){
    let p = 0;
    for (let i = 1; i < arr.length; i++) {
        if (arr[p] < arr[i]) {   
            arr[p + 1] = arr[i];
            p = p + 1;
        }
    }
    arr.length = p+1
    return arr;
}

let arr = [1, 5, 2, 6, 4, 4, 5, 5].sort();
console.log(removeDuplidate(arr));


function removeSecondWay(arr){
    arr.sort()
    if(arr.length == 0) return []
    let p=0;
    for(let i=1;i<arr.length;i++){
        if(arr[p] !== arr[i]){
            p++
            arr[p]=arr[i]
        }
    }
    arr.length=p+1
    return arr
}
// console.log(removeSecondWay(arr))


