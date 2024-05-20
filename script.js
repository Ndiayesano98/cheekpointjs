function reverseString(str) {
    return str.split('').reverse().join('');
}
function countCharacters(str) {
    return str.length;
}
function capitalizeWords(sentence) {
    return sentence.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}

console.log(reverseString("hello")); 

console.log(countCharacters("hello"));  

console.log(capitalizeWords("hello world"));  








function findMaximum(arr) {
    if (arr.length === 0) return null;
    let maximum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maximum) {
            maximum = arr[i];
        }
    }
    return maximum;
}

function findMinimum(arr) {
    if (arr.length === 0) return null;
    let minimum = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < minimum) {
            minimum = arr[i];
        }
    }
    return minimum;
}

function sumOfArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

function filterArray(arr, condition) {
    return arr.filter(condition);
}






function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    }
}


function isPrime(num) {
    if (num <= 1) {
        return false;
    }
    if (num <= 3) {
        return true;
    }
    if (num % 2 === 0 || num % 3 === 0) {
        return false;
    }
    let i = 5;
    while (i * i <= num) {
        if (num % i === 0 || num % (i + 2) === 0) {
            return false;
        }
        i += 6;
    }
    return true;
}


function fibonacciSequence(terms) {
    const sequence = [0, 1];
    for (let i = 2; i < terms; i++) {
        sequence[i] = sequence[i - 1] + sequence[i - 2];
    }
    return sequence.slice(0, terms);
}


const number = 5;
console.log("Factorial of", number, "is:", factorial(number));

const num = 17;
console.log(num, "is prime?", isPrime(num));

const terms = 10;
console.log("Fibonacci sequence with", terms, "terms:", fibonacciSequence(terms));












