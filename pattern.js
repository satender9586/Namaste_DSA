// Basic Pattern

// 1-> solid ranctangle

// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

function solidRactangle() {
  for (let i = 0; i < 5; i++) {
    let temp = "";
    for (let j = 0; j < 5; j++) {
      temp += "*" + " ";
    }
    console.log(temp);
  }
}

// solidRactangle()

// Hollow Ractangles

//  * * * * 
//  *     * 
//  *     *
//  * * * *

function hollowRactangles(outer, inner) {
  for (let i = 1; i <= outer; i++) {
    let star = " ";
    for (let j = 1; j <= inner; j++) {
      if (i == 1 || j == 1 || i == outer || j == inner) {
        star += "*" + " ";
      }else{
        star += " "+ " "
      }
    }
    console.log(star)
  }
}

// hollowRactangles(4, 4);

// Half Pyramid

//  * 
//  * * 
//  * * *
//  * * * *

function halfPyramid(){
    for(let i=1;i<=4;i++){
        let temp=" "
        for(let j=1;j<=i;j++){
            temp += "*" + " "
        }
        console.log(temp)
    }
}
// halfPyramid()

// Inverted Half Pyramid 

//  * * * * * 
//  * * * * 
//  * * *
//  * *
//  * 

function invertedHalfPyramid(){
   for(let j=5;j>=1;j--){
    let temp = " "
    for(let i=1;i<=j;i++){
        temp += "*" + " "
    }
    console.log(temp)
   }
}

// invertedHalfPyramid()

//          * 
//        * * 
//      * * *
//    * * * *
//  * * * * *

function invetedHalfPyramidby80degree(){
    for(let i=1;i<=5;i++){
        let temp = " ";
        for(let j=1;j<=5-i;j++){
            temp += " " + " "
        }
        for(let j=1;j<=i;j++){
            temp += "*" + " "
        }
        console.log(temp)
    }
}

// invetedHalfPyramidby80degree()

//  1 
//  1 2 
//  1 2 3
//  1 2 3 4
//  1 2 3 4 5

function invertdHalfPyramidByNumber(){
    for(let i=1;i<=5;i++){
       let count = 0
       let temp = " "
        for(let j=1;j<=i;j++){
            count = count + 1
            temp +=count + " "
        }
  console.log(temp)
    }
}
// invertdHalfPyramidByNumber()



// invertedHalfPyramidByNumber with 180 degree roted

//  1 2 3 4 
//  1 2 3 
//  1 2
//  1

function rotedHalfPyramidByNumber(){
    for(let i=1;i<=5;i++){
        let count = 0;
        let temp = " "

        for(let j=1;j<=5-i;j++){
            count = count + 1;
            temp += count + " "
        }
        console.log(temp)
    }
}

// rotedHalfPyramidByNumber()



// Floyed Trigle

//  1 
//  2 3 
//  4 5 6
//  7 8 9 10
//  11 12 13 14 15

function floyedTrigle(){
       let count = 0;
    for(let i=1;i<=5;i++){
        let temp = " " ;
        for(let j=1;j<=i;j++){
            count = count + 1
            temp +=count + " "
        }
        console.log(temp)
    }
}

// floyedTrigle()

// zero one triangel

//  1 
//  0 1 
//  1 0 1
//  0 1 0 1
//  1 0 1 0 1

function zeroOneTriangel(){
    for(let i=1;i<=5;i++){
        let temp = " ";
        for(let j=1;j<=i;j++){
            if((i+j)%2==1){
                temp += "0" + " "
            }else{
                temp += "1" + " "
            }
        }
        console.log(temp)
    }
}

// zeroOneTriangel()


// invertedHalfPyramid with other way

//          * 
//        * * 
//      * * *
//    * * * *
//  * * * * *

function invertedHalfPyramid2(){
    for(let i=1;i<=5;i++){
        let temp = " "
        for(let j=1;j<=5;j++) {
            if(j<=(5-i)){
                temp += " " + " "
            }else{
                temp += "*" + " "
            }
        } 
        console.log(temp)
    }
}
// invertedHalfPyramid2()