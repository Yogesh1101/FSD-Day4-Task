//Rotate an array by k times

//Using Anonymous Function

var nums = [1,2,3,4,5], k = 1;
(function(arr, n){
    for(let i = 0; i < n; i++){
        var temp = arr.pop();
        arr.unshift(temp);
    }
})(nums, k)
console.log("Anonymous Function: " + nums);

//Using IIFE

var number = [1,2,3,4,5], a = 3;
((arr, n) => {
    for(let i = 0; i < n; i++){
        var temp = arr.pop();
        arr.unshift(temp);
    }
})(number, a);
console.log("IIFE: " + number);