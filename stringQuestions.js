// Reverse a string
// Write a function to reverse "hello" → "olleh" without using .reverse().

function reverseString(str){
    let arr = str.split("").reverse().join("")
    return arr
    
}

// console.log(reverseString("hello"))

function reverseString(str){
        let newstr = ""
       for(let char = str.length-1;char>=0;char--){
        newstr +=str[char]
       }
       return newstr
}
// console.log(reverseString("hello"))

// check pallidrom 
function checkPalindrom(str){
    let store = str.replace(" ","").toLowerCase()
    let temp = "";

    for(let i=store.length-1;i>=0;i--){
        temp +=store[i]
    }

    console.log(temp, store)
    if(temp==store){
        return true
    }else{
        return false
    }
}

// First non-repeating character

// 👉 "swiss" → output should be "w".

function firstNotRepeated(str){
    const obj = {}
   for(let i=0;i<str.length;i++){
    if(!obj[str[i]]){
        obj[str[i]]=1
    }else{
        obj[str[i]]=obj[str[i]]+1
    }
   }
    
   let find= Object.keys(obj).find((item)=> obj[item]===1)
   console.log(find)
}
// firstNotRepeated("swis")


function countVowels(str){
    let newstr = str.toLowerCase()
    
    let vovels = 0;
    let constaint = 0
    for(let i=0;i<newstr.length;i++){
        if("aeiou".includes(newstr[i])){
            vovels++
        }else{
            constaint++
        }
    }
    console.log(vovels)
    console.log(constaint)
}
// countVowels("interview")

// apitalize first letter of each word

// 👉 "i am preparing for interview" → "I Am Preparing For Interview".

function chapitalOfEachCharactor(str){
    return str.split(" ").map((item)=> item[0].toUpperCase()+item.slice(1)).join(" ")
}
// console.log(chapitalOfEachCharactor("i am preparing for interview" ))

// Longest word

// 👉 "Frontend developer interview" → "interview".
function findLongest(str){
    let newstr = str.split(" ")
    let highest = newstr[0]
    for(let i=1;i<newstr.length;i++){
        if(highest.length<=newstr[i].length){
            highest = newstr[i]
        }
    }
    return highest
}
// console.log(findLongest("Frontend developer interview"))


function removeDuplicate(str){
    let see = ""
    for(let i=0;i<str.length;i++){
        if(!see.includes(str[i])){
            see +=str[i]
        }
    }
    return see
}
console.log(removeDuplicate("hellowo"))