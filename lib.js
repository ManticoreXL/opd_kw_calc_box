function avg(numbers){
    let s = 0;
    // add all of numbers
    for(let i =0; i < numbers.length; i++){
        s += numbers[i];
    }
    return s / numbers.length; // divide them to calculate average
}

function prime(num){
    // try to divide from 2 to num-1
    // if it's divided, it's not a prime number. return false
    for(let i = 2; num > i; i++){
        if(num % i === 0) {
            return false;
        }
    }
    return num > 1; // if num > 1, it's a prime number. (1 is not a prime number)
}

function fact(num){
    if(num==1){ // epsilon value of recursive function
        return 1;
    }
    else{ // recursive call
        return num * fact(num-1);
    }
}

module.exports = {
    avg,
    prime,
    fact
}