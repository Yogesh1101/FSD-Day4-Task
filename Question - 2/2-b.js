//Convert all the strings to title caps in a string array

const convertTitleCaps = (arr) => {
    for(let i = 0; i < arr.length; i++){
        arr[i] = arr[i][0].toUpperCase() + arr[i].substring(1);
    }
    console.log(arr);
}

var str = ['hello', 'world', 'yogesh', 'kumar'];
convertTitleCaps(str);