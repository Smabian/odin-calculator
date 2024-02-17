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
        case "+": return add(a,b); break;
        case "-": return subtract(a,b); break;
        case "*": return multiply(a,b); break;
        case "/": return divide(a,b);
    }
}

function getButtonValue(button) { // Listener can access its triggering event
    return button.innerHTML;
}

function updateDisplayValue(value) {
    screen.innerHTML = parseFloat(value);
}

const numberButtons = document.getElementsByClassName("number");
const operatorButtons = document.getElementsByClassName("operator");
const clearButton = document.getElementsByClassName("clear");
const equalButton = document.getElementsByClassName("equal");
const screen = document.getElementById('display');

let numberOne = 0;
let numberTwo = 0;
let operatorFlag = false;
let operator = "";
let displayValue = "0";

// Resets Calculator
Array.from(clearButton).forEach(button => button.addEventListener("click", function() {
    displayValue = "0";
    operatorFlag = false;
    numberOne = 0;
    numberTwo = 0;
    operator = "";
    updateDisplayValue(displayValue);
}));

// Get Value from Number Buttons and add it to screen if no operator has been selected
Array.from(numberButtons).forEach(button=> button.addEventListener("click", function(){
    let value = getButtonValue(button);
    if (operatorFlag === false) {
        displayValue += value
    } else {
        displayValue = value;
        operatorFlag = false;
    }
    updateDisplayValue(displayValue);
}));

// Set Operator Flag for True
// get Display for NumberOne if NumberOne is Empty, else use Display for NumberTwo
Array.from(operatorButtons).forEach(button=> button.addEventListener("click", function(){
    operator = getButtonValue(button);
    operatorFlag = true;

    if (numberOne === 0) {
        numberOne = parseFloat(displayValue);
    } else {
        numberTwo = parseFloat(displayValue);
        numberOne = operate(numberOne, numberTwo, operator);
        numberTwo = 0;
        displayValue = 0;
        updateDisplayValue(numberOne);
    }
}));

Array.from(equalButton).forEach(button => button.addEventListener("click", function() {
/*    numberTwo = parseInt(displayValue); 
    numberOne = operate(numberOne, numberTwo, operator);
    updateDisplayValue(numberOne); */
}));

console.log(numberOne);
console.log(numberTwo);
console.log(displayValue);
console.log(operator);
