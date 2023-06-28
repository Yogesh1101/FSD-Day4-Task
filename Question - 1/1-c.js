//Sum of all numbers in an array

//Using Anonymous Function

var nums = [1,2,3,4,5,6], sum1 = 0;
(function(arr) {
    for(let i = 0; i < arr.length; i++){
        sum1 += arr[i];
    }
    console.log("Anonymous Function: " + sum1);
})(nums);

//Using IIFE

var nums = [1,2,3,4,5,6,7,8,9], sum2 = 0;
((arr) => {
    for(let i = 0; i < arr.length; i++){
        sum2 += arr[i];
    }
    console.log("IIFE: " + sum2);
})(nums);