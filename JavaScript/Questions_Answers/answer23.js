const num = parseInt(prompt('Enter any number'));

function isPrime(num){
    if(num<=1)
    return false;

    for(let i = 2; i <= Math.sqrt(num); i++){
        if(num % i === 0)
        return false;
    }
    return true;
}

console.log(`The given number is ${isPrime(num)? 'a prime number' : 'not a prime number'}.`);

