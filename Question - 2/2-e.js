//Return all the palindromes in an array

const checkPalindrome = (arr) => {
    var result = [];
    arr.forEach((word) => {
        var temp = reverseString(word);
        if(isPalindrome(word, temp)){
            result.push(word);
        }
    })
    console.log(result);
}

var str = ['hello', 'rotator', 'world', 'madam'];
checkPalindrome(str);

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