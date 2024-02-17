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
    if (b===0) {
        screen.innerHTML = "-- black hole --";
        return;
    } else {
        return a / b;
    }
}

function operate (a, b, operator) {
    switch(operator){
        case "+": return add(a,b); break;
        case "-": return subtract(a,b); break;
        case "*": return multiply(a,b); break;
        case "÷": return divide(a,b);
    }
}

function getButtonValue(button) { // Listener can access its triggering event
    return button.innerHTML;
}

function updateDisplayValue(value) {
    screen.innerHTML = parseFloat(parseFloat(value).toFixed(9));
}

function calculateOutcome(){
    if (numberOne === 0 || displayValue === 0) {
        updateDisplayValue(numberOne);
    } else {
        numberTwo = parseFloat(displayValue);
        numberOne = operate(numberOne, numberTwo, operator);
        updateDisplayValue(numberOne);
        numberTwo = 0;
        displayValue = 0;
        operator = "";
        operatorFlag = false;
    } 
}

const numberButtons = document.getElementsByClassName("number");
const operatorButtons = document.getElementsByClassName("operator");
const clearButton = document.getElementsByClassName("clear");
const equalButton = document.getElementsByClassName("equal");
const backspaceButton = document.getElementsByClassName("backspace");
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
        displayValue += value;
    } else {
        displayValue = value;
        operatorFlag = false;
    }
    updateDisplayValue(displayValue);
}));

// Run Operator Button Actions
Array.from(operatorButtons).forEach(button=> button.addEventListener("click", function(){
    if (operator === ""){
        operator = getButtonValue(button);
    } else {
        operatorFlag = true; //Setting OperatorFlag to True, so numberDisplay can be reset
    }

    if (numberOne === 0) {
        numberOne = parseFloat(displayValue);
        displayValue = 0;

    } else {
        calculateOutcome();
        displayValue = 0;
        operator = getButtonValue(button);
    }
}));

Array.from(equalButton).forEach(button => button.addEventListener("click", function() {
    calculateOutcome();
}));

Array.from(backspaceButton).forEach(button => button.addEventListener("click", function() {
    //Remove One place from right of display value
    if (displayValue === "0") {
        displayValue = 0;
    } else if (typeof displayValue === "string") {
        displayValue = displayValue.slice(0, -1); 
        updateDisplayValue(displayValue);
    }
}));


