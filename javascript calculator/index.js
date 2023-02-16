// Selecting the necessary elements
const display = document.getElementById('display');
const clearBtn = document.getElementById('clear');
const equalBtn = document.getElementById('equals');
const decimalBtn = document.getElementById('decimal');
const numberBtns = document.querySelectorAll('.number');
const operatorBtns = document.querySelectorAll('.operator');

// Variables to store the operands and operator
let operand1 = '';
let operand2 = '';
let operator = null;

// Function to update the display
function updateDisplay(text) {
  display.textContent = text;
}

// Function to reset the calculator
function clearCalculator() {
  operand1 = '';
  operand2 = '';
  operator = null;
  updateDisplay('0');
}

// Function to perform the calculation
function calculate() {
  const num1 = parseFloat(operand1);
  const num2 = parseFloat(operand2);

  // If any operand is invalid or no operator is selected, do nothing
  if (isNaN(num1) || isNaN(num2) || operator === null) {
    return;
  }

  let result = 0;

  // Perform the calculation based on the operator
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    case '*':
      result = num1 * num2;
      break;
    case '/':
      result = num1 / num2;
      break;
    default:
      return;
  }

  // Display the result and reset the operands and operator
  updateDisplay(result.toString());
  operand1 = result.toString();
  operand2 = '';
  operator = null;
}

// Event listeners for the number buttons
numberBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // If an operator is not selected yet, add the digit to the first operand
    if (operator === null) {
      operand1 += btn.textContent;
      updateDisplay(operand1);
    }
    // Otherwise, add the digit to the second operand
    else {
      operand2 += btn.textContent;
      updateDisplay(operand2);
    }
  });
});

// Event listener for the decimal button
decimalBtn.addEventListener('click', () => {
  // If an operator is not selected yet and the first operand doesn't already contain a decimal point, add a decimal point to the first operand
  if (operator === null && operand1.indexOf('.') === -1) {
    operand1 += '.';
    updateDisplay(operand1);
  }
  // If an operator is selected and the second operand doesn't already contain a decimal point, add a decimal point to the second operand
  else if (operator !== null && operand2.indexOf('.') === -1) {
    operand2 += '.';
    updateDisplay(operand2);
  }
});

// Event listener for the operator buttons
operatorBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // If an operator is already selected and both operands are entered, perform the calculation
    if (operator !== null && operand2 !== '') {
      calculate();
    }
    // Set the operator to the clicked button's text content
    operator = btn.textContent;
  });
});

// Event listener for the equal button
equalBtn.addEventListener('click', () => {
  calculate();
});

// Event listener for the clear button
clearBtn.addEventListener('click', () => {
  clearCalculator();
});
