// Task 1

const fib = num => {
    const result = [0, 1];

    for (let i = 2; i < num; i++) {

        const prevNum1 = result[i - 1];
        const prevNum2 = result[i - 2];
        result.push(prevNum1 + prevNum2);
    }
    console.log(result);
    return result[num];
}
// console.log(fib(6));




// Task 2.1 using "for"

const geometryProgression = function getSumGeometry(n, g) {
    let sum = 0;
    let lastNum = 1;
    let str = '';

    for (let i = 0; i < n; i++) {
        sum += lastNum;
        str += `${lastNum} + `;
        lastNum *= g;
    }
    str = str.slice(0, -1);

    console.log(str + ` = ${sum}`);
    return sum;
};
// geometryProgression(5, 2);


// Task 2.2 function declaration

function progress(n, q) {
    let b1 = 1;
    return b1 * (Math.pow(q, n) - 1) / (q - 1);
}
// console.log(progress(5, 2));


// Task 2.2 arrow function 

const arrProgress = (b1, n, q) => b1 * (Math.pow(q, n) - 1) / (q - 1);
// console.log(arrProgress(1, 5, 2));




// Task 3.1 function expression

let IsPrimeNumber = function isPrime(num) {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
let PrimeNumberRange = function getPrimesFor(a, num) {
    a = +prompt('Введіть початок діапазону простого числа', '');
    num = +prompt('Введіть кінець діапазону простого числа', '');
    const primes = [];

    for (let i = a; i <= num; i++) {
        if (IsPrimeNumber(i)) {
            primes.push(i);
        }
    }
    return primes;
}
// console.log(PrimeNumberRange());


// Task 3.2 arrow function 

let ShortIsPrimeNumber = num => {
    for (let i = 2, max = Math.sqrt(num); i <= max; i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}
let ShortPrimeNumberRange = (a, num) => {
    a = +prompt('Введіть початок діапазону простого числа', '');
    num = +prompt('Введіть кінець діапазону простого числа', '');
    const primes = [];

    for (let i = a; i <= num; i++) {
        if (ShortIsPrimeNumber(i)) {
            primes.push(i);
        }
    }
    return primes;
}
// console.log(ShortPrimeNumberRange());