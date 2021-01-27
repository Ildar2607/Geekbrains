'use strict'

function summation(a, b) {
    return a + b;
}

function deduction(a, b) {
    return a - b;
}

function multiplication(a, b) {
    return a * b;
}

function division(a, b) {
    return a / b;
}

summation(2, 3);
deduction(10, 7);
multiplication(10, 7);
division(8, 2);

let a = 2 + 2;

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case "+":
            return summation(2, 3);
        case "-":
            deduction(10, 7);
        case "/":
            division(8, 2);
        case "*":
            multiplication(10, 7);
        default:
            throw new Error("Операция " + operation + " не предусмотрена");
    }
}

console.log(mathOperation(1, 2, "+"));
console.log(mathOperation(1, 2, "-"));
console.log(mathOperation(1, 2, "/"));
console.log(mathOperation(1, 2, "*"));
console.log(mathOperation(1, 2, "lorem"));



