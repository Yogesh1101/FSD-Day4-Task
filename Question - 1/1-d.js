//Return all the prime numbers in an array
var anon = [], iife = [];
//Using Anonymous Function

var nums = [1,2,3,4,5,6,7,8,9];
(function(arr){
    for(let i = 0; i < arr.length; i++){
        if(isPrime(arr[i])){
            anon.push(arr[i]);
        }
    }
})(nums);
console.log("Anonymous Function: " + anon.join(" "));

//Using IIFE

var nums = [1,2,3,4,5,6,7,8,9];
((arr) => {
    for(let i = 0; i < arr.length; i++){
        if(isPrime(arr[i])){
            iife.push(arr[i]);
        }
    }
})(nums);
console.log("IIFE: " + iife.join(" "));

//Function to check prime number
function isPrime(number){
    var count = 0;
    if(number <= 1){
        return false;
    }else{
        for(let i = 2; i <= number; i++){
            if(number == 1 || number % i == 0){
                count++;
            }
        }
        if(count == 1){
            return true;
        }else{
            return false;
        }
    }
    
}