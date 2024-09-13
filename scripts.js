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