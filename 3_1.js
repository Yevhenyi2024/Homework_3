const number = 15 ; 

function checkNumber(num) {
    if (num % 3 === 0 && num % 5 === 0) { 
        console.log("FizzBuzz");
    } else if (num % 3 === 0) {
        console.log("Fizz");
    } else if (num % 5 === 0) {
        console.log("Buzz");
    } else {
        console.log("Число не ділиться на 3 або 5");
    }
}

checkNumber(number);

