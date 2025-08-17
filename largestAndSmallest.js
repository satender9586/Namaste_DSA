// Find largest number in array

const findLargestNumber = (param)=>{
    let temp = -Infinity;

    for(let index in param){
        if(temp < param[index]){
            temp =  param[index]
        }
    }
    return temp;
}

const arr = [1,2,3,4,12,13,4,55]
// console.log(findLargestNumber(arr))



// Find Minimun number in array

const findSmallestNumber = (param)=>{
    let temp = Infinity;
    for(let i=0;i<param.length;i++){
        if(temp>param[i]){
            temp = param[i]
        }
    }
    return temp
}
console.log(findSmallestNumber(arr))

