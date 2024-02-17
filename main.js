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
    if (value === "empty") {
        displayValue = "0";
    } else {
        displayValue += value;
    }
    screen.innerHTML = parseInt(displayValue);
}

const numberButtons = document.getElementsByClassName("number");
const operatorButtons = document.getElementsByClassName("operator");
const clearButton = document.getElementsByClassName("clear");
const screen = document.getElementById('display');

let numberOne = 0;
let numberTwo = 0;
let operator;
let displayValue = "";

Array.from(numberButtons).forEach(button=> button.addEventListener("click", function(){
    let value = getButtonValue(button);
    updateDisplayValue(value);
}));

Array.from(operatorButtons).forEach(button=> button.addEventListener("click", function(){
    operator = getButtonValue(button);

    if (numberOne === 0) {
        numberOne = parseInt(displayValue);
        updateDisplayValue("empty");
    } else {
        numberTwo = parseInt(displayValue);
        updateDisplayValue("empty");
        numberOne = operate(numberOne, numberTwo, operator);
        updateDisplayValue(numberOne);
    }
}));

Array.from(clearButton).forEach(button => button.addEventListener("click", function() {
    updateDisplayValue("empty");
    numberOne = 0;
    numberTwo = 0;
}));
