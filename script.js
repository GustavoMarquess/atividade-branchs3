let currentValue = '';
let currentOperator = '';
let lastValue = '';
function appendValue(value) {
  currentValue += value;
  document.getElementById('result').value = currentValue;
}
function clearInput() {
  currentValue = '';
  document.getElementById('result').value = '';
}
function calculate() {
  if (currentValue === '') {
    return;
  }
  
  lastValue = currentValue;
  currentValue = evalOperation(lastValue);
  
  document.getElementById('result').value = currentValue;
}

function evalOperation(operation) {
  return new Function('return ' + operation)();
}
