// 1) . Object to Array
// {a: 1, b: 2, c: 3} ------> [ [ 'a', 1 ], [ 'b', 2 ], [ 'c', 3 ] ]

function objectToArray(obj){
    const arr =[];
    for(let key in obj){
        let keyValue = [key, obj[key]]
        arr.push(keyValue)
    }
    return arr
}

// const obj = {a: 1, b: 2, c: 3};

// console.log(objectToArray(obj))


// Q2. Array to Object
// const arr = ["x", "y", "z"]; ---> {0:"x", 1:"y", 2:"z"}

function arrayToObject(arr){
    const obj={};
    for(let value in arr){
        obj[value]=arr[value]
    }
    return obj
}
// console.log(arrayToObject(["x", "y", "z"]))

// get nested object properties
// const obj = {a:{b:{c:10}}};

function findValue(obj){

    let temp = ""
    
    for(let key in obj){
        if(obj[key] !==Object){
            temp +=key
        }else{
           return findValue(obj[key])
        }
    }
    console.log(temp)
}
findValue({a:{b:{c:10}}})