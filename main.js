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
    if (value === "clear") {
        displayValue = "0";
    } else {
        displayValue += value;
    }
    screen.innerHTML = displayValue;
}

const buttons = document.getElementsByTagName("button");
const screen = document.getElementById('display');

let numberOne;
let numberTwo;
let operator;
let displayValue = "";

Array.from(buttons).forEach(button=> button.addEventListener("click", function(){
    let value = getButtonValue(button);
    updateDisplayValue(value);
}));