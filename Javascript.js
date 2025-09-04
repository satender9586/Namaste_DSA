// Basic to Advance javascirpt
// Variables : variable is name of memory location where we store something and use it later across the scope of program
// there is thee way to create variables in js var let const


// console.log(first) // we can access var variable before initialization of value : hoisting
var first = "raju"
// first = "satender"  // we can update value later 
// var first = "jai singh" // we can re-declare variable 


// console.log(lastName) // can not access due to temporal dead zone
let lastName = "Kumar"
// lastName = "Thakur"
// // we can update value later 
// let lastName = "raju" // we can not re-declare


// console.log(age) // can not access due to temporal dead zone
const age = 40; // value should initialize during declare varialbe and can not modified later
// age = 60; // can not do this
// const age = 90  // we can not re-declare

//****************************************************************************************************/

// DataType : Datatype is way to catogarise variable like string boolean number etc, javscript is
// loose type of language there is no type stytem in javascirpt, 

// primitive (number , Boolean, String, null, undefined, Symbol, bigInt)
// non-primitive (Array, Object, function)

// primitives
let myRollNo = 1234; // number
let isLoggedIn = true // Boolean
let myName = "Satender Kumar" // string
let temp = null // null
let lastname = undefined; // undefined
let mySecretCode = Symbol("12345") // symbol
let myCryptoNumber = 2342424424242424n // bigInt

// primitive data type are store in stake, means when we copy of any value to anoter variable
// copy store of other variable, when we can in copy variable then value will change

// reference :  they store refrence of variables not value

const obj = {
    firstName :"Satender",
    age : 60
}

console.log(typeof myCryptoNumber)
