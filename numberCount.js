// count number of negative exists in array
// EX : [1,2,3,4,5,-3,2,9,10,-40,-80,55,91,-22]
// Output : 4

const arr = [1,2,3,4,5,-3,2,9,10,-40,-80,55,91,-22]

function countNagativeNumber(arrParam){
    let count = 0;

    for(let index in arrParam){
        if(arrParam[index]<0){
            count = count+1
        }
    }
    return count
}

console.log(countNagativeNumber(arr))