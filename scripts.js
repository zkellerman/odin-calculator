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
  return y === 0 ? 'ERROR! >:(' : x / y;
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
    display.textContent = 'ERROR! >:(';
  else {
    let result = operate(operator, num1, num2).toString();

    if (result.length > 11) 
      result = result.substring(0, 11);

    display.textContent = result;
  }

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

const deleteButton = document.querySelector('#delete');
deleteButton.addEventListener('click', () => {
  let displayText = display.textContent;
  if (displayText.length === 1) {
    display.textContent = '0';
    startNewNumber = true;
  }
  else
    display.textContent = displayText.substring(0, displayText.length - 1);
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

document.addEventListener('keydown', (e) => {
  e.preventDefault();

  switch(e.code) {
    case 'Numpad0':
    case 'Numpad1':
    case 'Numpad2':
    case 'Numpad3':
    case 'Numpad4':
    case 'Numpad5':
    case 'Numpad6':
    case 'Numpad7':
    case 'Numpad8':
    case 'Numpad9':
      document.querySelector(`button[value="${e.code.at(-1)}"]`).click();
      break;

    case 'NumpadDecimal':
    case 'Period':
      decimalButton.click();
      break;

    case 'Backspace':
    case 'Delete':
      deleteButton.click();
      break;

    case 'Enter':
    case 'NumpadEnter':
      equalsButton.click();
      break;

    case 'NumpadAdd':
      document.querySelector('button[value="+"]').click();
      break;

    case 'NumpadSubtract':
      document.querySelector('button[value="-"]').click();
      break;

    case 'NumpadMultiply':
      document.querySelector('button[value="*"]').click();
      break;

    case 'NumpadDivide':
      document.querySelector('button[value="/"]').click();
      break;
  };
});