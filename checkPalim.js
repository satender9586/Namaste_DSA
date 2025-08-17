// count digit

function countDigit(digit) {
  let valu = digit;
  let count = 0;
  while (valu > 0) {
    valu = Math.floor(valu / 10);
    console.log("count");
  }
}

// countDigit(1234);

// check number is palindrom

function palindom(num) {
  let temp = num;
  let newNumber = "";
  while (temp > 0) {
    newNumber += Math.floor(temp % 10);
    temp = Math.floor(temp / 10);
  }

  if (num == +newNumber) {
    return true;
  } else {
    return false;
  }
}

// console.log(palindom(12134))

function palindom2(num) {
  let temp = num;
  let rev = 0;
  while (temp > 0) {
    let rem = temp % 10;
    rev = 10 * rev + rem;
    temp = Math.floor(temp / 10);
  }
  console.log(rev);
}

// palindom2(23234)

function reverceNumber(num) {
  let xCopy = num;
  num = Math.abs(num);
  let rev = 0;

  while (num > 0) {
    let rem = num % 10;
    rev = 10 * rev + rem;
    num = Math.floor(num / 10);
  }

  return xCopy < 0 ? -rev : rev;
}
// console.log(reverceNumber(-23423))

var remove = (arr, val)=>{
  let x=0;
  for(let i=0;i<arr.length;i++){
    if(arr[i] !== val){
      arr[x]=arr[i]
      x= x+1
    }
  }
  return arr
}


console.log(remove([0,1,2,2,3,0,4,2],2))