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

let firstNumber = 0;
let secondNumber = 0;
let operator = '';

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

  if (display.textContent === '0')
    display.textContent = number;
  else
    display.textContent += number;
}

const numberButtons = document.querySelectorAll('.numbers button');
numberButtons.forEach((button) => {
  button.addEventListener('click', () => {
    inputDisplay(button.id);
  });
});