// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

var lengthOfLastWord = function(s) {
    let trimString = s.trim()
    let findLastString = trimString.split(" ").reverse()[0].length
    return findLastString
};

console.log(lengthOfLastWord("hello munna kese ho yaar"))