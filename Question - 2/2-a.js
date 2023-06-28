//Print odd numbers in an array using Arrow Function

const printOdd = (arr) => {
    var result = [];
    arr.forEach((num) => {
        if(num % 2 != 0){
            result.push(num);
        }
    })
    console.log(result.join(' '))
}

const arr = [1,2,3,4,5,6,7,8,9];
printOdd(arr);