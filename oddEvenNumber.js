// print all odd numbers and ever number

const arr = [2,3,4,5,10,12,13,14,15]

function printAllOddNumber(odd){ // this is function declaration
        const oddNumbers =[]
        for(let values of odd){
            // check odd number
            if(values%2==1){
                oddNumbers.push(values)
            }

        }
        return oddNumbers
}

// console.log(printAllOddNumber(arr))

const printAllEvenNumber = function(even){ // function expresstion
    const evenNumbers = [];
    for(let values of even){
        if(values % 2 ==0){
            evenNumbers.push(values)
        }
    }
    return evenNumbers;
}

console.log(printAllEvenNumber(arr))