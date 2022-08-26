let resultText = document.querySelector('#result-text');
let displayValue = '';
let firstNumber;
let latestOperator;

function add(a, b) {
  let x = Number(a) + Number(b);
  displayValue = x;
  resultText.textContent = displayValue;
}


function subtract(a, b) {
  let x = Number(a) - Number(b);
  displayValue = x;
  resultText.textContent = displayValue;
}

function multiply(a, b) {
  let x = Number(a) * Number(b);
  displayValue = Math.round(x * 10) / 10;
  resultText.textContent = displayValue;
}

function divide(a, b) {
  let x = Math.round((a / b) * 10) / 10;
  displayValue = x;
  resultText.textContent = displayValue;
}

function operate(a, b, op) {
  if (op == '+') add(a, b);
  if (op == '-') subtract(a, b);
  if (op == '*') multiply(a, b);
  if (op == '/') divide(a, b);
}

function numClick(btn) {
  let cont = btn.textContent;
  displayValue += cont;
  resultText.textContent = displayValue;
}

function operatorClick(operator) {
  let cont = operator.textContent;
  firstNumber = Number(displayValue);
  latestOperator = cont;
  displayValue = cont;
  resultText.textContent = displayValue;
  displayValue = '';
}

function resultClick() {
  console.log(firstNumber)
  console.log(latestOperator)
  console.log(displayValue)
  console.log('result: ')

  let first = firstNumber;
  let oper = latestOperator;
  let last = Number(displayValue);
  operate(first, last, oper);
}

function clearAll() {
  resultText.textContent = '0';
  displayValue = '';
  firstNumber = undefined;
  latestOperator = undefined;
}

let buttons = document.querySelectorAll('button');

for (let elem of buttons) {
  elem.addEventListener('mouseenter', () => {
    elem.style.backgroundColor = 'aqua'
  })
  elem.addEventListener('mouseleave', () => {
    elem.style.backgroundColor = ''
  })
};