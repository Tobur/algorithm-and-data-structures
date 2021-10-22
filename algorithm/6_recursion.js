function factorial (n) {
    if (n === 1) {
        return n;
    }

    return n * factorial(n - 1);
}

let result = factorial(3);
console.log('Result is', result);
