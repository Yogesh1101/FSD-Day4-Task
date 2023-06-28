//Remove duplicates from an array
var anon = [], iife = [];

//Using Anonymous Function

var nums = [1,2,2,4,2,3,4,5];
(function(arr) {
    for(let i = 0; i < arr.length; i++){
        if(!(anon.includes(arr[i]))){
            anon.push(arr[i]);
        }
    }
})(nums);
console.log("Anonymous Function: " + anon.join(' '));

//Using IIFE

var numbers = [1,2,2,4,2,3,4,5];
((arr) => {
    for(let i = 0; i < arr.length; i++){
        if(!(iife.includes(arr[i]))){
            iife.push(arr[i]);
        }
    }
})(numbers);
console.log("IIFE: " + iife.join(' '));