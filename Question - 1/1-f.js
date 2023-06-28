//Return median of two sorted arrays of the same size
var anon = [], iife = [];

//Using Anonymous Function

var arr1 = [1,12,15,26,38];
var arr2 = [2,13,17,30,45];
(function(arr1, arr2){
    var arr = [];
    for(let i = 0; i < arr1.length; i++){
        arr.push(arr1[i]);
    }
    for(let i = 0; i < arr2.length; i++){
        arr.push(arr2[i]);
    }
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    var middle = arr.length / 2;
    var near = middle - 1;
    var median = (arr[middle] + arr[near]) / 2;
    console.log(median);
})(arr1, arr2);

//Using IIFE

var arr1 = [1,12,15,26,38];
var arr2 = [2,13,17,30,45];
((arr1, arr2) => {
    var arr = [];
    for(let i = 0; i < arr1.length; i++){
        arr.push(arr1[i]);
    }
    for(let i = 0; i < arr2.length; i++){
        arr.push(arr2[i]);
    }
    for(let i = 0; i < arr.length; i++){
        for(let j = i + 1; j < arr.length; j++){
            if(arr[i] > arr[j]){
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    var middle = arr.length / 2;
    var near = middle - 1;
    var median = (arr[middle] + arr[near]) / 2;
    console.log(median);
})(arr1, arr2);