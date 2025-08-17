// first the index of given value in array. return : index
// // not exists then return : -1


const findIndexofValue = (param, value) => {
    let position = -1;

    for (let index in param) {
        if (param[index] == value) {
            position = index;
        }
    }
    return position
}

const arr = [4, 33, 22, 11, 44, 55, 43, 20, 43, 77, 99]
const find = 99

console.log(findIndexofValue(arr, find))
// findIndexofValue(arr)