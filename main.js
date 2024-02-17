function add (a,b) {
    return a+b;
}

function subtract (a,b) {
    return a-b;
}

function multiply (a,b) {
    return a * b;
}

function divide (a, b) {
    return a / b;
}

function operate (a, b, operator) {
    switch(operator){
        case "add": return add(a,b); break;
        case "subtract": return subtract(a,b); break;
        case "multiply": return multiply(a,b); break;
        case "divide": return divide(a,b);
    }
}

let numberOne;
let numberTwo;
let operator;

console.log(operate(2,4, "divide"));