const resultText = document.querySelector('#result-text');
const beforeText = document.querySelector('#before-text');
const history = document.querySelector('#history');
let displayValue = '';
let firstNumber;
let latestOperator;
let histPara;
let lastPara = document.querySelector('#firstPara');

function addHistory(a,b,op){
  histPara = document.createElement('p');
  histPara.textContent = `${a} ${op} ${b} = ${displayValue}`
  histPara.classList.add('histPara');
  history.insertBefore(histPara, lastPara);
  lastPara = histPara;
}

function add(a, b) {
  displayValue = Number(a) + Number(b);
  resultText.textContent = displayValue;
  beforeText.textContent = `${a} + ${b} = `
  addHistory(a,b,'+');
}

function subtract(a, b) {
  displayValue = Number(a) - Number(b);
  resultText.textContent = displayValue;
  beforeText.textContent = `${a} - ${b} = `
  addHistory(a,b,'+');
}

function multiply(a, b) {
  displayValue = Math.round((Number(a) * Number(b)) * 1000) / 1000;
  resultText.textContent = displayValue;
  beforeText.textContent = `${a} * ${b} = `
  addHistory(a,b,'+');
}

function divide(a, b) {
  displayValue = Math.round((a / b) * 10000) / 10000;
  resultText.textContent = displayValue;
  beforeText.textContent = `${a} / ${b} = `
  addHistory(a,b,'+');
}

function numClick(btn) {
  if(afterResult){
    displayValue = btn.textContent
  } else {
    displayValue += btn.textContent
  }
  afterResult = false;
  resultText.textContent = displayValue;
}

let isTwice = false;

function operatorClick(operator) {
  beforeText.textContent = resultText.textContent + ' ' + operator.textContent;
  if (isTwice) {
    resultClick();
  }
  latestOperator = operator.textContent;
  firstNumber = Number(displayValue);
  displayValue = '';
  isTwice = true;
}

let afterResult = false;
function resultClick() {
  isTwice = false;
  let first = firstNumber;
  let op = latestOperator;
  let last = Number(displayValue);

  if (op == '+') add(first, last);
  if (op == '-') subtract(first, last);
  if (op == '*') multiply(first, last);
  if (op == '/') divide(first, last);
  afterResult = true;
}

function clearAll() {
  beforeText.textContent = ''
  resultText.textContent = '';
  displayValue = '';
  firstNumber = undefined;
  latestOperator = undefined;
}

