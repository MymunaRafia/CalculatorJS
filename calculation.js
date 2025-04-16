let currentInput = '0';
let previousInput = '';
let operation = null;
let resetScreen = false;

const display = document.getElementById('display');

function updateDisplay() {
    display.textContent = currentInput;
}

function appendNumber(number) {
    if (currentInput === '0' || resetScreen) {
        currentInput = number;
        resetScreen = false;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function appendOperator(op) {
    if (operation !== null) calculateResult();
    previousInput = currentInput;
    operation = op;
    resetScreen = true;
}

function clearDisplay() {
    currentInput = '0';
    previousInput = '';
    operation = null;
    updateDisplay();
}

function calculateResult() {
    if (operation === null || resetScreen) return;
    
    let result;
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    
    switch (operation) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        case '%':
            result = prev % current;
            break;
        default:
            return;
    }
    
    currentInput = result.toString();
    operation = null;
    updateDisplay();
}

// Initialize display
updateDisplay();