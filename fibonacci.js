function isPresentInFibonacci(num) {
    if (num === 0) {
        return true;
    }

    let currentFibonacciNumber = 1;
    let previousFibonacciNumber = 0;

    for (; currentFibonacciNumber <= num; ) {
        if (num === currentFibonacciNumber) {
            return true;
        }
        let tempHolder = currentFibonacciNumber;

        currentFibonacciNumber =
            previousFibonacciNumber + currentFibonacciNumber;
        previousFibonacciNumber = tempHolder;
    }
    return false;
}

let number = 8;

const numberIsPresentInFibonacci = isPresentInFibonacci(number);
if (numberIsPresentInFibonacci) {
    const output = "O número pertence a sequência.";
    console.log(output);
    return output;
} else {
    const output = "O número não pertence a sequência.";
    console.log(output);
    return output;
}
