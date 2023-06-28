//Return all the palindromes in an array
var anon = [], iife = [];

//Using Anonymous Function

var str = ['madam', 'hello', 'world', 'rotator'];
var temp;
(function(arr){
    for(let i = 0; i < arr.length; i++){
        temp = reverseString(arr[i]);
        if(isPalindrome(arr[i], temp)){
            anon.push(arr[i]);
        }
    }
})(str);
console.log("Anonymous Function: " + anon.join(' '));

//Using IIFE

var str = ['madam', 'hello', 'world', 'rotator'];
var temp;
((arr) => {
    for(let i = 0; i < arr.length; i++){
        temp = reverseString(arr[i]);
        if(isPalindrome(arr[i], temp)){
            iife.push(arr[i]);
        }
    }
})(str);
console.log("IIFE: " + iife.join(' '));

//Function to check palindrome
function isPalindrome(str1, str2){
    if(str1 === str2){
        return true;
    }else{
        return false;
    }
}

//Function to reverse a string
function reverseString(string){
    return string.split('').reverse().join('');
}