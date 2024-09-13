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
  return x / y;
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
  if (display.textContent.length === 16) return;

  if (startNewNumber) {
    display.textContent = '';
    startNewNumber = false;
  }

  display.textContent += number;
}

function outputDisplay() {
  let num1 = parseInt(firstNumber);
  let num2 = parseInt(secondNumber);
  display.textContent = operate(operator, num1, num2);
}

function clear() {
  firstNumber = '';
  secondNumber = '';
  operator = '';
  startNewNumber = true;
}

const numberButtons = document.querySelectorAll('.numbers button');
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    inputDisplay(button.id);
  });
});

const functionButtons = document.querySelectorAll('.functions button');
functionButtons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id === 'clear') {
      clear();
      display.textContent = '0';
    }
    else if (button.id === '=') {
      if (firstNumber === '') return;
      
      secondNumber = display.textContent;
      outputDisplay();
      clear();
    }
    else {
      if (firstNumber !== '') {
        secondNumber = display.textContent;
        outputDisplay();
      }

      firstNumber = display.textContent;
      operator = button.id;

      startNewNumber = true;
    }
  });
});