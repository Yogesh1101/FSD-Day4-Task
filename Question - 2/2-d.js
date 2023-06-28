//Return all the prime numbers in an array

const primeNumbers = (arr) => {
    var result = [];
    arr.forEach((num) => {
        if(isPrime(num)){
            result.push(num);
        }
    })
    console.log(result.join(' '));
}

var numbers = [1,2,3,4,5,6,7,8,9];
primeNumbers(numbers);

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