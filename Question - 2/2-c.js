//Sum of all numbers in an array

const sumOfAllNumbers = (arr) => {
    var sum = 0;
    arr.forEach((num) => {
        sum += num;
    })
    console.log(sum);
}

var numbers = [1,2,3,4,5,6];
sumOfAllNumbers(numbers);