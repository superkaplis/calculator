function add(a, b) {
  console.log(Number(a) + Number(b));
}


function subtract(a, b) {
  console.log(Number(a) - Number(b));
}

function multiply(a, b) {
  console.log(Number(a) * Number(b));
}

function divide(a, b) {
  let rounded = Math.round((a / b)* 10) / 10  
  console.log(rounded);
}

function operate(){
  let a = prompt("Enter first number: ");
  let op = prompt("Enter operation (+, -, *, /) ");
  let b = prompt("Enter second number: ");

  if(op == '+') add(a, b);
  if(op == '-') subtract(a, b);
  if(op == '*') multiply(a, b);
  if(op == '/') divide(a, b);
}
// CONSOLE FUNCTION UP

let resultText = document.querySelector('#result-text');
let displayValue = '';

function numClick(btsn){
  let cont = btsn.textContent;
  displayValue += cont;
  resultText.textContent = displayValue;
}