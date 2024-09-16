function add(x, y) {
  return x + y;
}

function subtract(x, y) {
  return x - y;
}

function multiply(x, y) {
  return x * y;
}

function divide(x, y) {
  return y === 0 ? 'cannot compute' : x / y;
}

let firstNumber = '';
let secondNumber = '';
let operator = '';
let startNewNumber = true;

function operate(operator, x, y) {
  switch (operator) {
    case '+':
      return add(x, y);

    case '-':
      return subtract(x, y);

    case '*':
      return multiply(x, y);

    case '/':
      return divide(x, y);
  }
}

const display = document.querySelector('.display');

function inputDisplay(number) {
  if (display.textContent.length === 11) return;

  if (startNewNumber) {
    display.textContent = '';
    startNewNumber = false;
  }

  display.textContent += number;
}

function outputDisplay() {
  let num1 = parseFloat(firstNumber);
  let num2 = parseFloat(secondNumber);

  if (isNaN(num1) || isNaN(num2))
    display.textContent = 'cannot compute';
  else
    display.textContent = operate(operator, num1, num2);

  clear();
}

function clear() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  startNewNumber = true;
}

const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    inputDisplay(button.value);
  });
});

const functionButtons = document.querySelectorAll('.function');
functionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (firstNumber !== '') {
      secondNumber = display.textContent;
      outputDisplay();
    }

    firstNumber = display.textContent;
    operator = button.value;

    startNewNumber = true;
  });
});

const clearButton = document.querySelector('#clear');
clearButton.addEventListener('click', () => {
  clear();
  display.textContent = '0';
});

const signButton = document.querySelector('#sign');
signButton.addEventListener('click', () => {
  firstNumber = display.textContent;
  operator = '*';
  secondNumber = '-1';
  outputDisplay();
});

const percentButton = document.querySelector('#percent');
percentButton.addEventListener('click', () => {
  firstNumber = display.textContent;
  operator = '/';
  secondNumber = '100';
  outputDisplay();
});

const decimalButton = document.querySelector('#decimal');
decimalButton.addEventListener('click', () => {
  let decimalIndex = display.textContent.indexOf('.');
  if (decimalIndex === -1) {
    display.textContent += '.';
    startNewNumber = false;
  }
});

const equalsButton = document.querySelector('#equals');
equalsButton.addEventListener('click', () => {
  if (firstNumber === '') return;
      
  secondNumber = display.textContent;
  outputDisplay();
});