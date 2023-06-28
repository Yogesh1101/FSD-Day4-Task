//Print odd numbers in an array
var anon = [], iife = [];

//Using Anonymous Function

var nums = [1,2,3,25,42,7];
(function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
      anon.push(arr[i]);
    }
  }
})(nums);
console.log("Anonymous Function: " + anon.join(" "));

//Using IIFE

var nums = [1,2,3,25,42,7];
((arr) => {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 !== 0){
            iife.push(arr[i]);
        }
    }
})(nums);
console.log("IIFE: " + iife.join(" "));