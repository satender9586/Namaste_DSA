// Advance pattern

// *                 *
//  * *             * *
//  * * *         * * *
//  * * * *     * * * *
//  * * * * * * * * * *
//  * * * * * * * * * *
//  * * * *     * * * *
//  * * *         * * *
//  * *             * *
//  *                 *

// butterfly pattern

function butterfly(n) {
  let temp = 1;
  for (let i = 1; i <= n; i++) {
    let star = " ";
    if (i <= n / 2) {
      for (let j = 1; j <= n; j++) {
        if (j <= i) {
          star += "*" + " ";
        } else if (j > n - i) {
          star += "*" + " ";
        } else {
          star += " " + " ";
        }
      }
    } else {
      for (let j = 1; j <= n; j++) {
        if (j <= i - temp) {
          star += "*" + " ";
        } else if (j > n - (i - temp)) {
          star += "*" + " ";
        } else {
          star += " " + " ";
        }
      }
      temp = temp + 2;
    }

    console.log(star);
  }
}
// const n=10;
// butterfly(n)

// Solid Rambhos

//          * * * * *
//        * * * * *
//      * * * * *
//    * * * * *
//  * * * * *

function solidRambhos(n) {
  for (let i = 1; i <= n; i++) {
    // space
    let temp = " ";
    for (let j = 1; j <= n - i; j++) {
      temp += " " + " ";
    }
    for (let j = 1; j <= n; j++) {
      temp += "*" + " ";
    }

    console.log(temp);
  }
}
// solidRambhos(5)

// Number pyramid

//         1
//        2   2
//      3   3   3
//    4   4   4   4
//  5   5   5   5   5

function numberPyramid() {
  let n = 5;
  for (let i = 1; i <= 5; i++) {
    let space = " ";
    for (j = 1; j <= n; j++) {
      if (j <= n - i) {
        space += " " + " ";
      }
    }

    console.log(space);
  }
}
// numberPyramid()

// pallindrom pattern

//         1 
//        2 1 2 
//      3 2 1 2 3
//    4 3 2 1 2 3 4
//  5 4 3 2 1 2 3 4 5

function palindromicPattern() {
  let n = 5;
  for (let i = 1; i <= n; i++) {
    let star = " ";
    for (let j = 1; j <= (n-i); j++) {
        star += " " + " ";
    }

    for(let j=i ; j>=1;j--){
            star += j + " ";
    }

    for(let j=2;j<=i;j++){
        star += j + " "
    }

    console.log(star);
  }
}

// palindromicPattern();

// diamond pattern 

//    *
//     ***
//    *****
//   *******
//  *********
//  *********
//   *******
//    *****
//     ***
//      *

function diamondPattern(){
    let n=5;

    // outer 
    for(let i=1;i<=n;i++){
        let star = ""
        for(let j=1;j<=(n-i+1);j++){
            star += " " 
        }
        for(let j=1;j<=(i*2-1);j++){
             star += "*" 
        }
          console.log(star)
    }
    for(let i=5;i>=1;i--){
        let star = ""
        for(let j=1;j<=(n-i+1);j++){
            star += " " 
        }
        for(let j=1;j<=(i*2-1);j++){
             star += "*" 
        }
        console.log(star)
    }
}

diamondPattern()