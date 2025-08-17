// Find second largest number in array;

const findSecondLargestNumber = function findSecondLargest(param) {  // named function expression

  let firstNumber = -Infinity;
  let secondNumber = -Infinity;

  if(param.length<2) return null

  for(let i=0;i<param.length;i++){
    if(firstNumber < param[i]){
       firstNumber =  param[i]
    }else if(secondNumber < param[i] ){
      secondNumber = param[i]
    }
  }
  return {
    firstNumber,
    secondNumber
  }
};

const arr = [22, 11, 23,23, 24, 44, 54, 53, 5, 6, 0, 9];

console.log(findSecondLargestNumber(arr));
