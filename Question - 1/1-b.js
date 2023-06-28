//Convert all the strings to title caps in a string array
var anon = [], iife = [];

//Using Anonymous Function

var str = ['hello','guvi','yogesh','kumar'];
(function(arr){
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }
    anon.push(arr);
})(str);
console.log("Anonymous Function: " + anon);

//Using IIFE

var str = ['hello','guvi','yogesh','kumar'];
((arr) => {
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }
    iife.push(arr);
})(str);
console.log("IIFE: " + iife);