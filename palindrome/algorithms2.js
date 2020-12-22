// Given a string, return true or false depending if the string
// is a palindrome.  Palindromes are words that read the same backwards
// and forwards. Make sure it is case insensitive!
// --- Examples:
//   palindrome("Madam") === true
//   palindrome("love") === false

function palindromes(str){                  // you can also used other function name but functionalty is same.
    str=str.toLowerCase();
    // const abd = str.split("").reverse().join("");
    // if(str===abd){
    //     return true;
    // }else{
    //     return false;
    // }
        return str === str.split("").reverse().join("");

}